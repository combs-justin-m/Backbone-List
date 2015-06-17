;(function (){

  'use strict';

  app.Routers.Main = Backbone.Router.extend({

    initialize: function(options) {
      var args = options || {};
      this.collection = args.collection;
      Backbone.history.start();
    },

    routes: {
      ''              : 'homePage',
      'model/:id'     : 'singleItem'
    },

    homePage: function() {
      new app.Views.Main({
        collection: this.collection
      })
    },

    singleItem: function(id) {
      new app.Views.SingleView({
        singleID: id,
        collection: this.collection
      })
    }
  })
}());