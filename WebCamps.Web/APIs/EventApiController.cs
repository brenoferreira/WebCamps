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