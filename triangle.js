"use strict";

//var Shape = require("./shapes.js")

/*
 constructor function for triangle
 */
function Triangle(left, right, bottom) {

  if(!(this instanceof Triangle)){
    return new Triangle(left, right, bottom);
  }

  this.type= "Triangle";

  this.left = left;
  this.right = right;
  this.bottom = bottom;
  
  };


/* export the info from the function Triangle above*/
module.exports = Triangle;
