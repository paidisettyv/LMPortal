using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class Company
    {
        public Company()
        {
            this.CompanyIPs = new List<CompanyIP>();
            this.CompanyLenders = new List<CompanyLender>();
        }

        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string CompanyBrand { get; set; }
        public Nullable<System.DateTime> DateCreated { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<System.DateTime> DateBlocked { get; set; }
        public virtual ICollection<CompanyIP> CompanyIPs { get; set; }
        public virtual ICollection<CompanyLender> CompanyLenders { get; set; }
    }
}
