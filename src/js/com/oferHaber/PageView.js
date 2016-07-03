(function () {

    namespace("com.bambiHaber").PageView = Backbone.View.extend({
        events: {
            'click #phone': 'onPhoneClick',
            'click #address': 'onAddressClick',
            'click #linkedIn': 'onLinkedInClick',
            'click #emailIcon': 'onEmailIconClick',
            'click .popOption.aboutMe': 'onAboutMeClick',
            'click .popOption.cv': 'onCvClick',
            'click .popOption.canaryMidi': 'onCanaryMidiClick',
            'click .popOption.github': 'onGithubClick'
        },
        initialize: function () {
            _.bindAll.apply(_, [this].concat(_.functions(this)));

            this.$contentEl = $('#content', this.$el);
            this.render();
        },

        render: function () {

            /*
             this.currentView = new com.bambiHaber.tabs.cv.CvView();
             */
            this.currentView = new com.bambiHaber.tabs.aboutMe.AboutMeView({
                el: this.$contentEl
            });
        },


        killCurrentView: function () {

            this.currentView.undelegateEvents();
            this.$contentEl.empty();
            this.currentView.$el.removeData().unbind();
        },
        /**
         * View events
         */
        onPhoneClick: function () {
            window.open("skype:+972523712465?call");
        },

        onAddressClick: function () {
            window.open("https://www.google.co.il/maps/place/%D7%91%D7%95%D7%A8%D7%95%D7%9B%D7%95%D7%91+35,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0711842,34.7778774,17z/data=!3m1!4b1!4m2!3m1!1s0x151d4b7f73b7f8a5:0xffb6aadd0d8f0652");
        },

        onLinkedInClick: function () {
            window.open("http://www.linkedin.com/pub/ofer-haber/18/894/694");
        },

        onEmailIconClick: function () {
            window.location.href = 'mailto:haber.ofer@gmail.com';
        },

        onAboutMeClick: function () {

            this.killCurrentView();
            this.currentView = new com.bambiHaber.tabs.aboutMe.AboutMeView({
                el: this.$contentEl
            });
        },

        onCvClick: function () {

            this.killCurrentView();
            this.currentView = new com.bambiHaber.tabs.cv.CvView({
                el: this.$contentEl
            });
        },

        onCanaryMidiClick: function () {
            window.open("http://vkeyboard.ofer-haber.com");
        },

        onGithubClick: function () {
            window.open("http://www.github.com/BambiHaber/");
        }
    });
})();