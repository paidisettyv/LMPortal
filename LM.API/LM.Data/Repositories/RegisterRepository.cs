using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LM.Data.Models;
using LM.Data.Repositories.Interfaces;

namespace LM.Data.Repositories
{
    public class RegisterRepository : IRegisterRepository
    {
         private readonly LmPortalContext _lmPortalContext;
        private readonly UserLoginAuth _newClass;

        public RegisterRepository(UserLoginAuth newClass)
        {
            _lmPortalContext = new LmPortalContext();

             _newClass = newClass;

            _lmPortalContext.Configuration.LazyLoadingEnabled = false;
            _lmPortalContext.Configuration.ProxyCreationEnabled = false;
           
        }
        public void Add()
        {
            throw new NotImplementedException();
        }

        public User GetByUserName(string username)
        {

            using (_lmPortalContext)
            {
                return _lmPortalContext.Users.SingleOrDefault(u => u.Firstname.Contains(username.ToLower()));

            }
            // return new User();

        }

        public ICollection<User> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
