using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class UserPassword
    {
        public int UserPasswordId { get; set; }
        public Nullable<int> UserId { get; set; }
        public string PasswordHash { get; set; }
        public Nullable<System.DateTime> DateCreated { get; set; }
        public virtual User User { get; set; }
    }
}
