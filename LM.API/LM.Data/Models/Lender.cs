using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class Lender
    {
        public Lender()
        {
            this.CompanyLenders = new List<CompanyLender>();
        }

        public int LenderId { get; set; }
        public string LenderName { get; set; }
        public string LenderBrand { get; set; }
        public Nullable<int> TrueTimeLenderId { get; set; }
        public Nullable<int> LMXLenderId { get; set; }
        public Nullable<int> BankVisionLenderId { get; set; }
        public virtual ICollection<CompanyLender> CompanyLenders { get; set; }
    }
}
