using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebCamps.Web.Models
{
    public class Talk
    {
        public String Title { get; set; }

        public String Description { get; set; }

        public Speaker Speaker { get; set; }

        public String StartTime { get; set; }

        public String EndTime { get; set; }
    }
}