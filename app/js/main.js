;(function (){

  'use strict';

  var allItems = new app.Collections.List();

  allItems.fetch().success(function(){

    new app.Routers.Main({
      collection: allItems
    });

  });
}());