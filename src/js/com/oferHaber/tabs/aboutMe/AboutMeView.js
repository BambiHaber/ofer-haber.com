namespace("com.oferHaber.tabs.aboutMe").AboutMeView = Backbone.View.extend({
    template: $('#aboutMeTemplate').html(),
    initialize: function () {

        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.template = _.template($('#aboutMeTemplate').html());

        this.render();
        return this;
    },

    render: function () {

        $('#content').append(this.template({}));
    }
});