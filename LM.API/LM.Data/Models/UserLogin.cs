using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class UserLogin
    {
        public long UserLoginId { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<System.DateTime> DateCreated { get; set; }
        public Nullable<System.DateTime> DateAlive { get; set; }
        public virtual User User { get; set; }
    }
}
