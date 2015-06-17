;(function (){

  'use strict';

  app.Collections.List = Backbone.Collection.extend({

    model: app.Models.List,
    url: 'http://tiy-515.herokuapp.com/collections/jcmodellist'

  });

}());