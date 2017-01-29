"use strict";

/*
Variable Shape - 
This will bring the info from the shapes.js file
*/

//var Shape = require ("./shapes.js");


// constructor function for square
function Square(side) {

  if(!(this instanceof Square)){
    return new Square(side);
  }

  this.type= "Square";

  this.side = side;
 
 
  };


/* export the info from the function Square above*/
module.exports = Square;