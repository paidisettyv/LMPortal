using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using LM.Data.Models;
using LM.Data.Repositories;

namespace LM.Data
{
    public class UserLoginAuth
    {
        // ReSharper disable once InconsistentNaming
        /// <summary>
        /// 
        /// </summary>
        /// <param name="usr"></param>
        /// <param name="IP"></param>
        /// <returns></returns>
        public LoginOutcome CheckUserIPTemporaryBlocked(User usr, string IP)
        {
            var s = DateTime.Now.AddMinutes(-10);
            var c = usr.UserLoginAudits.Count(u => u.IPAddress.Equals(IP) && u.OutcomeId == (int)LoginOutcome.InvalidIP && u.DateCreated > s);

            if (c >= 5)
                return LoginOutcome.IpTemporarilyBlocked;
            else
                return LoginOutcome.Successful;
        }

        public LoginOutcome CheckUsernameTemporaryBlocked(User usr)
        {
            var s = DateTime.Now.AddMinutes(-10);
            var c = usr.UserLoginAudits.Count(u => u.OutcomeId == (int) LoginOutcome.CredentialsInvalid && u.DateCreated > s);

            if (c >= 3)
                return LoginOutcome.UserTemporarilyBlocked;
            else
                return LoginOutcome.Successful;
        }

        // ReSharper disable once InconsistentNaming
        /// <summary>
        /// 
        /// </summary>
        /// <param name="usr"></param>
        /// <param name="companyIps"></param>
        /// <param name="IPAddress"></param>
        /// <returns></returns>
        public LoginOutcome CheckIPIsValidForCompanyOrUser(User usr,List<CompanyIP> companyIps, string IPAddress)
        {
            var cip = companyIps.Where(c => c.CompanyId == usr.CompanyId && c.IPA.Equals(IPAddress)).ToList();
            if (cip.Count != 0) return LoginOutcome.Successful;
            var u = usr.UserIPs.Where(ip => ip.IPA.Equals(IPAddress) && ip.IPB.Equals(IPAddress)).ToList();
            return u.Count == 0 ? LoginOutcome.InvalidIP : LoginOutcome.Successful;
        }

        public LoginOutcome CheckIsUserLoggedInLast20Seconds(User usr)
        {
            return LoginOutcome.Successful;
        }

        public LoginOutcome CheckIsUserLoggedIn(User usr)
        {
            var isLoggedIn = usr.UserLogins.Count(ul => ul.DateAlive >= DateTime.Now.AddSeconds(-20));
            return isLoggedIn > 0 ? LoginOutcome.UserLoggedIn : LoginOutcome.Successful;
        }

        public LoginOutcome ValidateUsernameAndPassword(User usr, string password)
        {
            var isValid = usr.UserPasswords.LastOrDefault();
            return isValid == null ? LoginOutcome.CredentialsInvalid : BCrypt.Net.BCrypt.Verify(password,isValid.PasswordHash) ?LoginOutcome.Successful : LoginOutcome.CredentialsInvalid;
        }
    }
}
