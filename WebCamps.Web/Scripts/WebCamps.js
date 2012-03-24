Talk = Backbone.Model.extend({
    defaults: {
        Title: '',
        Description: '',
        Speaker: {},
        StartTime: '',
        EndTime: ''
    }
});

Speaker = Backbone.Model.extend({
    defaults: {
        Name: '',
        Twitter: '',
        Resume: ''
    }
});

Event = Backbone.Model.extend({
    defaults: {
        Title: 'WebCamps Rio de Janeiro!',
        Description: '<p>O WebCamps é um evento presencial destinado as pessoas que desejam começar a desenvolver aplicações Web. Não importa se voce não sabe nada sobre desenvolvimento Web, ou se voce já é um programador experiente. Durante o WebCamps - Rio de Janeiro, voce irá conhecer as mais novas tecnologias e ferramentas de desenvolvimento Web fornecidas pela Microsoft.</p><p>Todo o conteúdo apresentado durante o evento é <strong>gratuito</strong>.</p>',
        RegistrationLink: '#/Inscricao',
        Date: '25/05/2012'
    }
});

Talks = Backbone.Collection.extend({
    model: Talk,
    url: '/api/event/talks'
});

Speakers = Backbone.Collection.extend({
    model: Speaker,
    url: '/api/event/speakers'
});

EventView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },

    render: function() {
        var event = new Event();

        var template = _.template($('#event-template').html(), { event: event });
        $(this.el).html(template);
    }
});

RegistrationView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },

    render: function () {
        var template = _.template($('#registration-template').html(), {});
        $(this.el).html(template);
    }
});

TalksView = Backbone.View.extend({
    initialize: function () {
        $(this.el).empty();
        ShowLoadingIndicator(this.el);
        var talks = new Talks();
        var self = this;
        talks.fetch({
            success: function () {
                HideLoadingIndicator(self.el);
                talks.each(function (talk) {
                    self.render(talk);
                });
            }
        });
    },

    render: function (talk) {
        var template = _.template($('#talk-template').html(), { talk: talk });
        $(this.el).append(template);
    }
});

SpeakersView = Backbone.View.extend({
    initialize: function () {
        $(this.el).empty();
        ShowLoadingIndicator(this.el);

        var speakers = new Speakers();
        var self = this;
        speakers.fetch({
            success: function () {
                HideLoadingIndicator(self.el);
                speakers.each(function (speaker) {
                    self.render(speaker);
                });
            }
        });
    },

    render: function (speaker) {
        var template = _.template($('#speaker-template').html(), { speaker: speaker });
        $(this.el).append(template);
    }
});

function ShowLoadingIndicator(element) {
    $(element).activity({
        segments: 12,
        align: 'left',
        valign: 'top',
        steps: 3,
        width: 2,
        space: 1,
        length: 3,
        color: '#030303',
        speed: 1.5
    });
}

function HideLoadingIndicator(element) {
    $(element).activity(false);
}

AppRouter = Backbone.Router.extend({
    routes: {
        '/Agenda': 'Agenda',
        '/Palestrantes': 'Palestrantes',
        '/Inscricao': 'Inscricao',
        '*actions': 'Home'
    },

    Agenda: function () {
        var talksView = new TalksView({ el: $('#content') });
    },

    Palestrantes: function() {
        var speakersView = new SpeakersView({ el: $('#content') });
    },

    Inscricao: function() {
        var registrationView = new RegistrationView({ el: $('#content') });
    },

    Home: function() {
        var eventView = new EventView({ el: $('#content') });
    }
});

$(function () {
    var appRouter = new AppRouter();
    Backbone.history.start();
});