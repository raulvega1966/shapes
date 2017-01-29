function User(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}

function Admin(firstName, lastName, email) {
  User.apply(this, arguments);
  this.admin = true;
}

// how we make the Admin prototype inherit from User
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

// First, define the Person constructor.
//function Person() {}

function Person(firstN, lastN, eml) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
   User.apply(this, arguments);
}

console.log(Admin.prototype.constructor);

// then make it so that User inherits from Person
User.prototype.user = true;
User.prototype.introduce = function() {
   console.log("Hi, my name is " + this.first_name);
};



// this needs to work
console.log(new User("Jane", "Doe", "jane@doe.com") instanceof Person);
function User(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}

function Admin(firstName, lastName, email) {
  User.apply(this, arguments);
  this.admin = true;
}

// how we make the Admin prototype inherit from User
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;



// this needs to work
console.log(new User("Jane", "Doe", "jane@doe.com") instanceof Person);
var bob = new Admin("Bob", "Guy", "bob@gmail.com");
console.log(bob instanceof Admin); //true
console.log(bob instanceof User); //true
console.log(bob instanceof Person); //true




//var myFather = new Person("My Fathers First Name", "My Fathers Last Name");
//var myMother = new Person("My Mothers First Name", "My Mothers Last Name");

//console.log(myFather.firstName);
//console.log(myFather.lastName);
//console.log(myMother.firstName);
//console.log(myMother.lastName);

Person.prototype.user = true;
Person.prototype.introduce = function() {
   console.log("I got this hard thing to work")
};


