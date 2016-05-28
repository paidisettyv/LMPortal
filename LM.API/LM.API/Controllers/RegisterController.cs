using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Remoting.Messaging;
using System.Web.Http;
using System.Web.Http.Cors;
using LM.Data;
using LM.Data.Models;
using LM.Data.Repositories.Interfaces;
using Newtonsoft.Json;

namespace LM.API.Controllers
{
   
    [EnableCors(origins: "http://localhost:3001", headers: "*", methods: "*")]
    public class RegisterController : ApiController
    {
        readonly IRegisterRepository _registerRepository;
        public RegisterController(IRegisterRepository registerRepository)
        {
            _registerRepository = registerRepository;
        }

        public string Get(string username)
        {
            if (!string.IsNullOrEmpty(username))
            {
                var user = _registerRepository.GetByUserName(username);
                if (user != null)
                    return JsonConvert.SerializeObject("Account already exists", Formatting.Indented,
                        new JsonSerializerSettings {ReferenceLoopHandling = ReferenceLoopHandling.Ignore});
                else return "";

            }
            else return "";
        }
        public class loginParams
        {
            public string grant_type;

            public string password { get; set; }
            public string username { get; set; }
        }
        public string Post([FromBody] loginParams user)
        {
            //var mySalt = BCrypt.Net.BCrypt.GenerateSalt();
            //var myHash = BCrypt.Net.BCrypt.HashPassword(user.password, mySalt);
            //Check is IP Blocked if records found with outcome field 5 are more than equal to 5
            //var userip = GetUser_IP();
            var usr = new User();
            //var isValid = _registerRepository.ValidateUserLoginDetails(user.username, user.password, userip, ref usr);
            //if (isValid == LoginOutcome.Successful)
            //{
            //    return JsonConvert.SerializeObject(usr, Formatting.Indented,
            //        new JsonSerializerSettings { ReferenceLoopHandling = ReferenceLoopHandling.Ignore });
            //}
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
    }
}
