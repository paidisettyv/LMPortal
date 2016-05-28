using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class User
    {
        public User()
        {
            this.UserAccesses = new List<UserAccess>();
            this.UserIPs = new List<UserIP>();
            this.UserLogins = new List<UserLogin>();
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
        public virtual ICollection<UserAccess> UserAccesses { get; set; }
        public virtual ICollection<UserIP> UserIPs { get; set; }
        public virtual ICollection<UserLogin> UserLogins { get; set; }
        public virtual ICollection<UserPassword> UserPasswords { get; set; }
        public virtual ICollection<UserLoginAudit> UserLoginAudits { get; set; }
    }
}
