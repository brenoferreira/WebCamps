using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace WebCamps.Web
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/event/{action}",
                defaults: new { controller = "EventApi", action = "Index" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);

            BundleTable.Bundles.EnableDefaultBundles();

            var scriptsOrder = new BundleFileSetOrdering("backbone");
            scriptsOrder.Files.Add("jquery-1.7.1.min.js");
            scriptsOrder.Files.Add("underscore.min.js");
            scriptsOrder.Files.Add("backbone.min.js");
            scriptsOrder.Files.Add("WebCamps.js");
            scriptsOrder.Files.Add("bootstrap.min.js");

            BundleTable.Bundles.FileSetOrderList.Add(scriptsOrder);
        }
    }
}