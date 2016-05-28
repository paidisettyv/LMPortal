using Microsoft.Practices.Unity;
using System;
using System.Web.Http;
using System.Web.Routing;
namespace LM.API
{

    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(System.Web.Mvc.GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            var unityContainer = new UnityContainer();

            ContainerRegistration.RegisterControllers(unityContainer);
            ContainerRegistration.RegisterRepositories(unityContainer);
            ContainerRegistration.RegisterMiscellaneous(unityContainer);

            GlobalConfiguration.Configuration.DependencyResolver = new IoCContainer(unityContainer);
            //HttpConfiguration config = GlobalConfiguration.Configuration;

            //config.Formatters.JsonFormatter
            //            .SerializerSettings
            //            .ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            
            //var sourcedomain = Request.Headers["Origin"];
            //if(sourcedomain!=null) Response.AppendHeader("Access-Control-Allow-Origin", sourcedomain);
//            Access-Control-Allow-Headers: Content-Type
//Access-Control-Allow-Methods: GET, POST, OPTIONS
//Access-Control-Allow-Origin: *
           
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}