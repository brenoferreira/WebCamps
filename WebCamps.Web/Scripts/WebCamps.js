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
        RegistrationLink: '#/Inscricao'
    }
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

AppRouter = Backbone.Router.extend({
    routes: {
        '/Agenda': 'Agenda',
        '/Palestrantes': 'Palestrantes',
        '/Inscricao': 'Inscricao',
        '*actions': 'Home'
    },

    Agenda: function () {
        alert('agenda');
    },

    Palestrantes: function() {
        alert('palestrantes');
    },

    Inscricao: function() {
        alert('inscricao');
    },

    Home: function() {
        var eventView = new EventView({ el: $('#content') });
    }
});

$(function () {
    //var eventView = new EventView({ el: $('#content') });

    var appRouter = new AppRouter();
    Backbone.history.start();
});