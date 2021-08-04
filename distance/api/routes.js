"use strict";

const controller = require("./controller");

module.exports = function (app) {
    //http://localhost:3000/about
  app.route("/about").get(controller.about);
  //http://localhost:3000/distance/84010/97229
  app.route("/distance/:zipcode1/:zipcode2").get(controller.getDistance);
};
