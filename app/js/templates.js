this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n        <div class=\"col l4 m6 s12\">\n          <div class=\"card\">\n            <div class=\"card-image portrait\">\n              <a href=\"#model/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"image1\"></a>\n            </div>\n            <div class=\"card-content\">\n              <p>"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n            <div class=\"card-action valign-wrapper\">\n              <a href=\"#model/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"valign\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n            </div>\n          </div>\n        </div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n\n\n  <nav>\n    <div class=\"nav-wrapper\">\n      <a href=\"https://www.martinguitar.com/\" target=\"_blank\" class=\"brand-logo center\"><img src=\"images/martinlogo.png\" class=\"logo\"></a>\n      <div class=\"container\"><ul class=\"left\">\n        <li><a href=\"#\" class=\"home\">Home</a></li>\n      </div>\n    </div>\n  </nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n\n    <div class=\"spacer\"></div>\n\n    <footer class=\"page-footer\">\n      <div class=\"footer-copyright\">\n        <div class=\"container\">\n        All images, names, and descriptions property of C.F. Martin & Co., Inc., © 2013 | All rights reserved -\n        <a href=\"https://www.martinguitar.com/component/content/article.html?id=220\">Privacy Policy</a>\n        </div>\n      </div>\n    </footer>\n\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["single"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<nav>\n  <div class=\"nav-wrapper\">\n    <a href=\"https://www.martinguitar.com/\" target=\"_blank\" class=\"brand-logo center\"><img src=\"images/martinlogo.png\" class=\"logo\"></a>\n    <div class=\"container\"><ul class=\"left\">\n      <li><a href=\"#\" class=\"home\">Home</a></li>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"col s12\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <a href=\"#model/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.url2 || (depth0 != null ? depth0.url2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url2","hash":{},"data":data}) : helper)))
    + "\" class=\"image1\"></a>\n      </div>\n      <div class=\"card-content\">\n        <p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n      <div class=\"card-action valign-wrapper\">\n        <a href=\"#model/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"valign\">"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"spacer\"></div>\n\n<footer class=\"page-footer\">\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n    All images, names, and descriptions property of C.F. Martin & Co., Inc., © 2013 | All rights reserved -\n    <a href=\"https://www.martinguitar.com/component/content/article.html?id=220\">Privacy Policy</a>\n    </div>\n  </div>\n</footer>";
},"useData":true});