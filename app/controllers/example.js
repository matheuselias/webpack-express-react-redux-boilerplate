"use strict";

module.exports = function(){
  let controller = {};

  controller.example = function(req, res, next){
    res.json({ message: 'First component with react and redux' });
  };

  return controller;
}
