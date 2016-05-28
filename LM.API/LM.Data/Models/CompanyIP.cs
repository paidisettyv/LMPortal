using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class CompanyIP
    {
        public int CompanyIPId { get; set; }
        public Nullable<int> CompanyId { get; set; }
        public string IPA { get; set; }
        public string IPB { get; set; }
        public Nullable<int> UserIdGranted { get; set; }
        public Nullable<System.DateTime> DateGranted { get; set; }
        public virtual Company Company { get; set; }
    }
}
