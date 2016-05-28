using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Web.Http.Dependencies;

namespace LM.API
{
    public class IoCContainer : IDependencyResolver, IDependencyScope
    {
        private readonly IUnityContainer _unityContainer;

        public IoCContainer(IUnityContainer unityContainer)
        {
            _unityContainer = unityContainer;
        }

        public IDependencyScope BeginScope()
        {
            var child = _unityContainer.CreateChildContainer();
            return new IoCContainer(child);
        }

        public object GetService(Type serviceType)
        {
            if (_unityContainer.IsRegistered(serviceType))
            {
                return _unityContainer.Resolve(serviceType);
            }
            else
            {
                return null;
            }
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            if (_unityContainer.IsRegistered(serviceType))
            {
                return _unityContainer.ResolveAll(serviceType);
            }
            else
            {
                return new List<object>();
            }
        }

        public void Dispose()
        {
            _unityContainer.Dispose();
        }
    }
}