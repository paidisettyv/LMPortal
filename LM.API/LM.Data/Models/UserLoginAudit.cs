using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class UserLoginAudit
    {
        public long UserLoginAuditId { get; set; }
        public Nullable<System.DateTime> DateCreated { get; set; }
        public string Username { get; set; }
        public string PasswordPartial { get; set; }
        public int OutcomeId { get; set; }
        public string IPAddress { get; set; }
        public Nullable<int> UserId { get; set; }
        public virtual User User { get; set; }
    }
}
