using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class CompanyLender
    {
        public int CompanyLenderId { get; set; }
        public Nullable<int> CompanyId { get; set; }
        public Nullable<int> LenderId { get; set; }
        public Nullable<int> UserIdGranted { get; set; }
        public Nullable<System.DateTime> DateGranted { get; set; }
        public Nullable<bool> AccessTrueTime { get; set; }
        public Nullable<bool> AccessLMX { get; set; }
        public Nullable<bool> AccessBankVision { get; set; }
        public virtual Company Company { get; set; }
        public virtual Lender Lender { get; set; }
    }
}
