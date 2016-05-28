using System.Collections.Generic;
using LM.Data.Models;

namespace LM.Data.Repositories.Interfaces
{
    public interface ICompanyRepository
    {
        void Add(Company company);
        void Update();
        void Delete();
        Company GetById(int id);
        ICollection<Company> GetAll();
    }
}
