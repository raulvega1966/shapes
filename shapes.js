/*****************************************************************
Homework Week 11 -Shapes.
Using in class activities: this and user from Week 10 class 
and require from weatherdest and geocoder
Mozilla Foundation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
*****************************************************************/
"use strict";

/*
 Variables for triangle, square and pentagon
 This will bring the information from the other 3 js files (triangle, square, pentagon)
*/

var Tri = require = ("./triangle.js");
var Squ = require = ("./square.js");
var Pen = require = ("./pentagon.js");


/*
 Shape constructor function - 
*/
function Shape(type) {
if(!(this instanceof Shape)) {
	return new Shape(type);
}
this.type = type;
};


/*
This should return the type of shape selected
(adding method to the constructor? - get_type will return the type of shape)
*/

Shape.prototype.get_type = function () {
	console.log("This is the type of shape you have selected: " + this.type)
	return;
}


/*This is where we assign the shape information to triangle or square or pentagon.
This was explained to me as tri is an instance object of shape and inherits the properties of the shape prototype
(which is confusing. I am applying it from an in class assignment)
*/
Tri.prototype = new Shape();
Tri.prototype.constructor = Tri;

Squ.prototype = new Shape();
Squ.prototype.constructor = Tri;

Pen.prototype = new Shape();
Pen.prototype.constructor = Tri;


/*
This is for creating variables for each shape constructor
*/
var shapenew = new Shape()
var trinew = new Tri(1,2,2,3);
var squnew = new Squ(4);
var pennew = new Pen(1,2,3,4,5)

/*
console log the new variables listed above
*/
console.log(shapenew.get_type());
console.log(trinew.get_type());
console.log(squnew.get_type());
console.log(pennew.get_type());

/*
console log the instance of to confirm code is working correctly
*/
console.log(trinew instanceof Tri);
console.log(trinew instanceof Shape);
console.log(squnew instanceof Pen);
console.log(squnew instanceof Shape);
console.log(pennew instanceof Squ);
console.log(pennew instanceof Shape);
 