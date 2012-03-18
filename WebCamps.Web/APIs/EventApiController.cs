using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using WebCamps.Web.Data;
using WebCamps.Web.Models;

namespace WebCamps.Web.APIs.Controllers
{
    public class EventApiController : ApiController
    {
        private EventRepository repository = new EventRepository();

        /// <summary>
        /// Useless class necessary because DataContractJsonSerializer cannot serialize anonymous types.
        /// </summary>
        public class ApiInfo
        {
            public ApiInfo()
            {
                Speakers = "/api/event/speakers";
                Talks = "/api/event/talks";
            }

            public String Speakers { get; set; }

            public String Talks { get; set; }
        }

        public ApiInfo Index()
        {
            var data = new ApiInfo();

            return data;
        }

        public IQueryable<Speaker> Speakers()
        {
            return this.repository.Speakers().AsQueryable();
        }

        public IQueryable<Talk> Talks()
        {
            return this.repository.Talks().AsQueryable();
        }
    }
}