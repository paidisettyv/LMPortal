using System.Collections.Generic;
using System.Linq;
using LM.Data.Models;
using LM.Data.Repositories.Interfaces;

namespace LM.Data.Repositories
{

    public class CompanyRepository : ICompanyRepository
    {
        private readonly LmPortalContext _lmPortalContext;
        public CompanyRepository()
        {
            _lmPortalContext = new LmPortalContext();
        }
        public void Add(Company company)
        {
            _lmPortalContext.Configuration.LazyLoadingEnabled = false;
            _lmPortalContext.Configuration.ProxyCreationEnabled = false;
           
            using (_lmPortalContext)
            {
                _lmPortalContext.Companies.Add(company);
            }
        }

        public void Update()
        {
            
        }

        public void Delete()
        {
            
        }

        public Company GetById(int companyId)
        {
            _lmPortalContext.Configuration.LazyLoadingEnabled = false;
            _lmPortalContext.Configuration.ProxyCreationEnabled = false;
            using (_lmPortalContext)
            {
               return _lmPortalContext.Companies.FirstOrDefault(c => c.CompanyId == companyId);
            }
        }

        public ICollection<Company> GetAll()
        {
            _lmPortalContext.Configuration.LazyLoadingEnabled = false;
            _lmPortalContext.Configuration.ProxyCreationEnabled = false;
            using (_lmPortalContext)
            {
                return _lmPortalContext.Companies.ToList();

            }
            
        }
    }
}
