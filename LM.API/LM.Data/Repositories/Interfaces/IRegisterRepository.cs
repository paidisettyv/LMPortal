using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LM.Data.Models;

namespace LM.Data.Repositories.Interfaces
{
    public interface IRegisterRepository
    {
        void Add();
        User GetByUserName(string username);
        ICollection<User> GetAll();
    }
}
