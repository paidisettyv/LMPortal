using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class UserIP
    {
        public int UserIPId { get; set; }
        public Nullable<int> UserId { get; set; }
        public string IPA { get; set; }
        public string IPB { get; set; }
        public Nullable<int> UserIdGranted { get; set; }
        public Nullable<System.DateTime> DateGranted { get; set; }
        public virtual User User { get; set; }
    }
}
