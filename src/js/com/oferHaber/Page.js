namespace("com.oferHaber").Page = Backbone.View.extend({
    initialize: function () {
        console.log("Hey there..");
        console.log("Checking me out?");
        console.log("Enjoy ;)");
        this.positionCollection = new com.oferHaber.position.Collection();
        this.model = new com.oferHaber.PageModel({
            positionCollection: this.positionCollection
        });
        this.view = new com.oferHaber.PageView({el: $('body'), model: this.model});

        this.positionCollection.fetch();
    }
});