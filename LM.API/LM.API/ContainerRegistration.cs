using LM.Data;
using LM.Data.Repositories;
using LM.API.Controllers;
using LM.Data.Repositories.Interfaces;
using Microsoft.Practices.Unity;

namespace LM.API
{
    public class ContainerRegistration
    {
        public static void RegisterControllers(IUnityContainer unityContainer)
        {
            // Fill in the Controllers to register here

            unityContainer.RegisterType<HomeController>();
            unityContainer.RegisterType<CompanyController>();
            unityContainer.RegisterType<UserController>();


        }

        public static void RegisterRepositories(IUnityContainer unityContainer)
        {
            // Fill in the Repositories to register here

            unityContainer.RegisterType(typeof(ICompanyRepository), typeof(CompanyRepository));
            unityContainer.RegisterType(typeof(IUserRepository), typeof(UserRepository));


        }

        public static void RegisterMiscellaneous(IUnityContainer unityContainer)
        {
            // Fill in the miscellaneous items to register here

            unityContainer.RegisterType(typeof(UserLoginAuth), typeof(UserLoginAuth));
        }
    }
}