using System.ComponentModel.DataAnnotations;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Http.OData.Routing;
using LM.Data;
using LM.Data.Models;
using LM.Data.Repositories.Interfaces;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using System.Web.Http;
using BCrypt.Net;
namespace LM.API.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public string Put([FromBody] loginParams userAccount)
        {
            if (!string.IsNullOrEmpty(userAccount.username))
            {
                var user = _userRepository.GetByUserName(userAccount.username);
                //if user exists reset password and email
                return JsonConvert.SerializeObject(user,Formatting.Indented,new JsonSerializerSettings{ ReferenceLoopHandling = ReferenceLoopHandling.Ignore});

            }
            else
            {
                var users = _userRepository.GetAll();
                return JsonConvert.SerializeObject(users);
            }

        }

        public class loginParams
        {
            public string grant_type;
            
            public string password { get; set; }
            public string username { get; set; }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        protected string GetUser_IP()
        {
            string visitorsIpAddr = string.Empty;
            if (HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"] != null)
            {
                visitorsIpAddr = HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            }
            else if (!string.IsNullOrEmpty(HttpContext.Current.Request.UserHostAddress))
            {
                visitorsIpAddr = HttpContext.Current.Request.UserHostAddress;
            }
            return visitorsIpAddr;
        }
        public string Post([FromBody] loginParams user)
        {
            //var mySalt = BCrypt.Net.BCrypt.GenerateSalt();
            //var myHash = BCrypt.Net.BCrypt.HashPassword(user.password, mySalt);
            //Check is IP Blocked if records found with outcome field 5 are more than equal to 5
            var userip = GetUser_IP();
            var usr = new User();
            var isValid = _userRepository.ValidateUserLoginDetails(user.username, user.password, userip, ref usr);
            if (isValid == LoginOutcome.Successful)
            {
                return JsonConvert.SerializeObject(usr, Formatting.Indented,
                    new JsonSerializerSettings {ReferenceLoopHandling = ReferenceLoopHandling.Ignore});
            }
            return "";
            //if (user.grant_type!=null)
            //{
            //    var d = user;
            //}

            //if (user.UserId == 0)
            //{

            //    var t = user;
            //}

        }
       
        // Fill in with other methods for POST, PUT, GET(id) etc
    }
}