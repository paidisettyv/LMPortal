using System;
using System.Net;
using System.Net.Http;
using System.Web.Http.Results;
using LM.Data.Models;
using LM.Data.Repositories.Interfaces;
using Newtonsoft.Json;
using System.Web.Http;

namespace LM.API.Controllers
{
    public class CompanyController : ApiController
    {
        readonly ICompanyRepository _companyRepository;

        public CompanyController(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        public string Get(int? id)
        {
            try
            {
                if (id != null)
                {
                    var company = _companyRepository.GetById((int)id);
                    return JsonConvert.SerializeObject(company);

                }
                else
                {
                    var companies = _companyRepository.GetAll();
                    return JsonConvert.SerializeObject(companies);
                }
            
            }
            catch (Exception ex)
            {

                var st = ex;
                return new ResponseMessageResult(Request.CreateErrorResponse(HttpStatusCode.InternalServerError,ex)).ToString();
            }
           
        }

        //public void Post([FromBody] Company company)
        //{
        //    if (company == null)
        //    {
        //        return;
        //    }

        //    if (company.CompanyId == 0)
        //    {

        //        _companyRepository.Add(company);
        //    }

        //}

        // Fill in with other methods for POST, PUT, GET(id) etc
    }
}