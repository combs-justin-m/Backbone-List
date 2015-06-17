;(function (){

  'use strict';

  app.Views.Main = Backbone.View.extend({

    className: 'list',

    events: {
      'submit #modelList'       : 'addModel'
    },

    template: hbs.main,

    initialize: function(options) {
      var args = options || {};
      this.collection = args.collection;

      $('main').html(this.el);
      this.render();
    },

    render: function() {
      this.$el.html(this.template({list: this.collection.toJSON() }));

    },

    addModel: function(e) {
      e.preventDefault();

      var form = $(e.target),
          name = form.find('#name').val(),
          description = form.find('#description').val(),
          price = form.find('#price').val(),
          url = form.find('#picURL').val(),
          url2 = form.find('#picURL2').val(),
          that = this;

      var m = new app.Models.List({
        name: name,
        description: description,
        price: price,
        url: url,
        url2: url2
      });

      this.collection.add(m).save().success( function () {
        that.render();
      });
    }


  });
}());