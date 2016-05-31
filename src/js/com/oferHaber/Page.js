(function () {
    namespace("com.bambiHaber").Page = Backbone.View.extend({
        initialize: function () {
            console.log("Hey there..");
            console.log("Checking me out?");
            console.log("Enjoy ;) - the more readable version in my github: http://github.com/StormCat/");

            this.model = new com.bambiHaber.PageModel();
            this.view = new com.bambiHaber.PageView({
                el: $('body'),
                model: this.model
            });
        }
    });
}());