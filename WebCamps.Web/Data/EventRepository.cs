using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebCamps.Web.Models;

namespace WebCamps.Web.Data
{
    public class EventRepository
    {
        private  List<Speaker> speakers;

        public EventRepository()
        {
            this.speakers = new List<Speaker>()
            {
                new Speaker() 
                { 
                    Name = "Breno Ferreira", 
                    Resume = "Dev lead at Microsoft Innovation Center", 
                    Twitter = "@breno_ferreira" 
                },
                new Speaker() 
                { 
                    Name = "Rodrigo Vidal", 
                    Resume = "Consultor independente", 
                    Twitter = "@rodrigovidal" 
                }
            };
        }

        public IEnumerable<Speaker> Speakers()
        {
            return this.speakers;
        }

        public IEnumerable<Talk> Talks()
        {
            return new List<Talk>()
            {
                new Talk() 
                { 
                    Title = "Novidades do ASP.NET MVC 4", 
                    Description = "Novidades presentes na nova versão do ASP.NET MVC.", 
                    Speaker = this.speakers.Single(speaker => speaker.Twitter == "@breno_ferreira"),
                    StartTime = "10:00",
                    EndTime = "11:00"
                },
                new Talk() 
                { 
                    Title = "Client-Side MVC com Backbone.JS", 
                    Description = "Estruture melhor sua aplicação web com Backbone.JS.", 
                    Speaker = this.speakers.Single(speaker => speaker.Twitter == "@rodrigovidal"),
                    StartTime = "11:00",
                    EndTime = "12:00"
                },
            };
        }
    }
}