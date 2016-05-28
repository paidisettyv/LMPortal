using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using LM.Data;
using LM.Data.Models;
using LM.Data.Repositories;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace LM.DataTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void LoginSuccessTest()
        {
            var nc = new UserLoginAuth();
            Assert.AreEqual(LoginOutcome.Successful, nc.ValidateUsernameAndPassword(new User()
            {
                UserId = 1,Username = "v@t.com",
                UserPasswords = new Collection<UserPassword>(){new UserPassword(){DateCreated = DateTime.Now.AddDays(-1),PasswordHash = "test",UserId = 1}}
            },  "test"));
            
        }

        [TestMethod]
        public void LoginFailTest()
        {
            var nc = new UserLoginAuth();
            Assert.AreEqual(LoginOutcome.CredentialsInvalid, nc.ValidateUsernameAndPassword(new User()
            {
                UserId = 1,
                Username = "v@t.com",
                UserPasswords = new Collection<UserPassword>() { new UserPassword() { DateCreated = DateTime.Now.AddDays(-1), PasswordHash = "testtesty", UserId = 1 } }
            }, "test"));
        }

        [TestMethod]
        public void CheckIPNotBlockedTest()
        {
            var nc = new UserLoginAuth();
            Assert.AreEqual(LoginOutcome.Successful, nc.CheckUserIPTemporaryBlocked(new User(), "127.0.0.1"));
            Assert.AreEqual(LoginOutcome.IpTemporarilyBlocked, nc.CheckUserIPTemporaryBlocked(new User(){
                UserLoginAudits = new Collection<UserLoginAudit>()
                {
                    new UserLoginAudit(){DateCreated = DateTime.Now.AddMinutes(-9),IPAddress = "0.0.0.0",OutcomeId = (int)LoginOutcome.InvalidIP},
                    new UserLoginAudit(){DateCreated = DateTime.Now.AddMinutes(-8),IPAddress = "0.0.0.0",OutcomeId = (int)LoginOutcome.InvalidIP},
                    new UserLoginAudit(){DateCreated = DateTime.Now.AddMinutes(-7),IPAddress = "0.0.0.0",OutcomeId = (int)LoginOutcome.InvalidIP},
                    new UserLoginAudit(){DateCreated = DateTime.Now.AddMinutes(-6),IPAddress = "0.0.0.0",OutcomeId = (int)LoginOutcome.InvalidIP},
                    new UserLoginAudit(){DateCreated = DateTime.Now.AddMinutes(-5),IPAddress = "0.0.0.0",OutcomeId = (int)LoginOutcome.InvalidIP}
                }
            }, "0.0.0.0"));
            
        }

        [TestMethod]
        public void ValidateCredentialsTest()
        {
            Assert.Inconclusive();
        }

        [TestMethod]
        public void CheckUserNameBlockedTest()
        {
            var nc = new UserLoginAuth();
            Assert.AreEqual(LoginOutcome.Successful, nc.CheckUsernameTemporaryBlocked(new User()));
            Assert.AreEqual(LoginOutcome.UserTemporarilyBlocked, nc.CheckUsernameTemporaryBlocked(new User()
            {
                UserLoginAudits = new Collection<UserLoginAudit>()
                {
                    new UserLoginAudit(){DateCreated = DateTime.Now.AddMinutes(-9),OutcomeId = 3},
                    new UserLoginAudit(){DateCreated = DateTime.Now.AddMinutes(-8),OutcomeId = 3},
                    new UserLoginAudit(){DateCreated = DateTime.Now.AddMinutes(-7),OutcomeId = 3}
                }
            }));
            
        }

        [TestMethod]
        public void ValidateIPTest()
        {
            var nc = new UserLoginAuth();
            var usr = new User()
            {CompanyId = 1,UserId = 1,UserIPs = new Collection<UserIP>() {new UserIP() {UserId = 1, IPA = "::1", IPB = "::1"}}
            };
            var usr2 = new User()
            {
                CompanyId = 1,
                UserId = 1//UserIPs = new Collection<UserIP>() { new UserIP() { UserId = 1, IPA = "::1", IPB = "::1" } }
            };
            var comp = new List<CompanyIP>() {new CompanyIP() {CompanyId = 1, IPA = "127.0.0.1", IPB = "127.0.0.2"}};
            var comp2 = new List<CompanyIP>() { new CompanyIP() { CompanyId = 2, IPA = "127.0.0.1", IPB = "127.0.0.2" } };
            
            Assert.AreEqual(LoginOutcome.Successful, nc.CheckIPIsValidForCompanyOrUser(usr,comp,"::1"),"Matches UserIP with IPAddress provided");
            Assert.AreEqual(LoginOutcome.Successful, nc.CheckIPIsValidForCompanyOrUser(usr, comp, "127.0.0.1"),"Matches CompanyIP with IP Provided");

            Assert.AreEqual(LoginOutcome.InvalidIP, nc.CheckIPIsValidForCompanyOrUser(usr, comp, "95.130.99.80"),"This user has both UserIP & CompanyIP, but doesn't match with the IP provided");
            Assert.AreEqual(LoginOutcome.InvalidIP, nc.CheckIPIsValidForCompanyOrUser(usr, comp2, "127.0.0.1"), "This user has only UserIP, doesn't have access from Company");
            Assert.AreEqual(LoginOutcome.InvalidIP, nc.CheckIPIsValidForCompanyOrUser(usr2, comp2, "127.0.0.1"), "This user has only access from company, Individual access is not provided");
        }
        
        
        
        
    }
}
