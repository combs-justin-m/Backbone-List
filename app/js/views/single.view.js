;(function (){

  'use strict';

  app.Views.SingleView = Backbone.View.extend({

    className: 'single',

    template: hbs.single,

    initialize: function(options) {
      var args = options || {};
      this.collection = args.collection;
      this.singleID = args.singleID;

      $('main').html(this.el);
      this.render();
    },

    render: function() {
      var singleItem = this.collection.get(this.singleID);

      this.$el.html(this.template(singleItem.toJSON()));
    }


  });

}());