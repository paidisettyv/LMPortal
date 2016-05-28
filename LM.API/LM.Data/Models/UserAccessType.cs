using System;
using System.Collections.Generic;

namespace LM.Data.Models
{
    public partial class UserAccessType
    {
        public UserAccessType()
        {
            this.UserAccesses = new List<UserAccess>();
        }

        public int UserAccessTypeId { get; set; }
        public string AccessDesc { get; set; }
        public virtual ICollection<UserAccess> UserAccesses { get; set; }
    }
}
