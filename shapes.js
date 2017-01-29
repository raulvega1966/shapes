/*****************************************************************
Homework Week 11 -Shapes.
Using in class activities: this and user from Week 10 class 
and require from weatherdest and geocoder
*****************************************************************/
"use strict";

/*
 Variables for triangle, square and pentagon
 This will bring the information from the other 3 js files (triangle, square, pentagon)
*/

var Triangle = require ("./triangle.js");
var Square = require ("./square.js");
var Pentagon = require ("./pentagon.js");


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
//This did not work.  Not sure why.
//Tri.prototype = new Shape();
//Tri.prototype.constructor = Tri;
//Squ.prototype = new Shape();
//Squ.prototype.constructor = Squ;
//Pen.prototype = new Shape();
//Pen.prototype.constructor = Pen;


//Yasha helped me with this section.  
//From stackOverflow: http://stackoverflow.com/questions/10430279/extending-an-object-in-javascript
//Mozilla Foundation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
//The Object.create() method creates a new object with the specified prototype object and properties.
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;


/*
This is for creating variables for each shape constructor
*/
//var shapenew = new Shape()
var tri = new Triangle();
var squ = new Square();
var pen = new Pentagon();

/*This does nothing....
console log the new variables.get_type.
//console.log("shape.get_type())---> " + shape.get_type());
console.log("tri.get_type())---> " + tri.get_type());
console.log("squ.get_type------>" + squ.get_type());
console.log("pen.get_type())---> " + pen.get_type());
*/


/*
console log the "instanceof" to confirm code is working correctly
*/

console.log('Is tri an instance of Triangle?', tri instanceof Triangle);// true
console.log('Is tri an instance of Shape?', tri instanceof Shape);// true

console.log('Is squ an instance of Square?', squ instanceof Square);// true
console.log('Is squ an instance of Shape?', squ instanceof Shape);// true

console.log('Is pen an instance of Pentagon?', squ instanceof Square);// true
console.log('Is pen an instance of Shape?', squ instanceof Shape);// true


/*
console.log("tri instanceof Triangle): " + tri instanceof Triangle);
console.log("trinew instanceof Shape): " + tri instanceof Shape);

console.log("squnew instanceof Squ): " + squnew instanceof Squ);
console.log("squnew instanceof Shape): " + squnew instanceof Shape);

console.log("pennew instanceof Pen): " + pennew instanceof Pen);
console.log("pennew instanceof Shape): " + pennew instanceof Shape);

*/
 