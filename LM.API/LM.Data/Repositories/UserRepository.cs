using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using LM.Data.DTOs;
using LM.Data.Models;
using LM.Data.Repositories.Interfaces;

namespace LM.Data.Repositories
{
    public class UserRepository:IUserRepository
    {
         private readonly LmPortalContext _lmPortalContext;
        private readonly UserLoginAuth _newClass;

         public UserRepository(UserLoginAuth newClass)
        {
            _lmPortalContext = new LmPortalContext();

             _newClass = newClass;

            _lmPortalContext.Configuration.LazyLoadingEnabled = false;
            _lmPortalContext.Configuration.ProxyCreationEnabled = false;
           
        }
        public void Add()
        {
            throw new System.NotImplementedException();
        }

        public void Update()
        {
            throw new System.NotImplementedException();
        }

        public void Delete()
        {
            throw new System.NotImplementedException();
        }

        public void Get()
        {
            throw new System.NotImplementedException();
        }

        public User GetByUserName(string username)
        {
           
            using (_lmPortalContext)
            {
               return _lmPortalContext.Users.SingleOrDefault(u=>u.Email.Contains(username.ToLower()));
              
            }
           // return new User();
            
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="username"></param>
        /// <param name="passwordHash"></param>
        /// <param name="IPAddress"></param>
        /// <returns></returns>
        public LoginOutcome ValidateUserLoginDetails(string username, string passwordHash, string IPAddress, ref User usr)
        {
            using (_lmPortalContext)
            {
                try
                {
                    //var nc = new UserLoginAuth();

                    var user =_lmPortalContext.Users.Include("UserPasswords").Include("UserIPs").Include("UserLoginAudits").Single(u => u.Username == username);
                    
                    var outcome= _newClass.CheckUserIPTemporaryBlocked(user, IPAddress);
                    if (outcome != LoginOutcome.Successful)
                    {
                        //audit to loginaudit with outcome=2
                        return outcome;
                    }
                    outcome = _newClass.ValidateUsernameAndPassword(user, passwordHash);
                    if (outcome != LoginOutcome.Successful)
                    {
                        //audit to login audit table with outcome=3
                        return outcome;
                    }
                    outcome = _newClass.CheckUsernameTemporaryBlocked(user);
                    if (outcome != LoginOutcome.Successful)
                    {
                        //audit to login audit table with outcome=4
                        return outcome;
                    }
                    //Validate IP, is valid for company or user
                    outcome = _newClass.CheckIPIsValidForCompanyOrUser(user,_lmPortalContext.CompanyIPs.ToList(), IPAddress);
                    if (outcome != LoginOutcome.Successful)
                    {
                        //audit to loginAudit with outcome 5
                        return outcome;
                    }
                    //validate is user loggedIn
                    outcome = _newClass.CheckIsUserLoggedInLast20Seconds(user);
                    if (outcome != LoginOutcome.Successful)
                    {
                        //audit user already logged in with outcome=6
                        return outcome;
                    }
                    //Login Success audit success with outcome =1
                    
                    _lmPortalContext.UserLoginAudits.Add(new UserLoginAudit(){DateCreated = DateTime.Now,IPAddress = IPAddress,PasswordPartial = passwordHash,OutcomeId = 1,UserId = user.UserId});
                    _lmPortalContext.SaveChanges();
                    usr = user;
                    return outcome;
                }
                catch (Exception ex)
                {
                    var t = ex;
                    return LoginOutcome.Error;
                }
            }
        }
        public ICollection<User> GetAll()
        {
            using (_lmPortalContext)
            {
                return _lmPortalContext.Users.ToList();
            }

        }

        
        
    }
}
