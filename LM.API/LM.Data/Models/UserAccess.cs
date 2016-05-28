using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class UserAccess
    {
        public int UserAccessId { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<int> AccessTypeId { get; set; }
        public Nullable<int> UserIdGranted { get; set; }
        public Nullable<System.DateTime> DateGranted { get; set; }
        public virtual User User { get; set; }
        public virtual UserAccessType UserAccessType { get; set; }
    }
}
