"use strict";

module.exports = function(app){
  const controller = app.controllers.example;

  app.get('/example', controller.example);
}
