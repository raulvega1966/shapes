"use strict";


// requiring our module exported from triangle.js
var Shape = require("./shape.js");


/*
This is the same code as triangle.js
However, it is made for a five sides instead of 3.
*/
function Pentagon(side1, side2, side3, side4, side5) {
	if(!(this instanceof Pentagon)){
		return new Pentagon(type);
	}

	this.type = "Pentagon";

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;

};


/* export the info from the function Pentagon above*/
module.exports=Pentagon;