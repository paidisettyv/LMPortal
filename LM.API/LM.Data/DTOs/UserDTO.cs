using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LM.Data.Models;

namespace LM.Data.DTOs
{
    public class UserDTO
    {

        public UserDTO()
            {
                this.UserAccesses = new List<UserAccess>();
                this.UserIPs = new List<UserIP>();
                this.UserLogins = new List<UserLoginAuth>();
                this.UserPasswords = new List<UserPassword>();
                this.UserLoginAudits = new List<UserLoginAudit>();
            }

            public int UserId { get; set; }
            public Nullable<int> CompanyId { get; set; }
            public string Username { get; set; }
            public string Firstname { get; set; }
            public string Surname { get; set; }
            public string Email { get; set; }
            public Nullable<bool> IsActive { get; set; }
            public Nullable<System.DateTime> DateCreated { get; set; }
            public Nullable<int> UserIdCreated { get; set; }
            public Nullable<System.DateTime> DateBlocked { get; set; }
            public Nullable<int> ForceLogout { get; set; }
            public  ICollection<UserAccess> UserAccesses { get; set; }
            public  ICollection<UserIP> UserIPs { get; set; }
            public  ICollection<UserLoginAuth> UserLogins { get; set; }
            public  ICollection<UserPassword> UserPasswords { get; set; }
            public  ICollection<UserLoginAudit> UserLoginAudits { get; set; }
        
    }
}
