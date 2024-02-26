
// let charactor = "Arya";
// charactor = "John";
// console.log(typeof charactor);

// charactor is already used //

// let charactor = "Arya";
// console.log(typeof charactor);
// charactor = 10;

// charactor is already used //

// null = 10;
// console.log(null)

// we can not use null bcoz null means empty//



// Solve this using logical operations. (<, >, &&, ||)
// var johnAge = 45;
// var markAge = 35;
// Check who is older either John or Mark
// Check who is younger
// Check if their age is equal
// Create a new variable and assign the age of john to the new variable.
// Check if John is equal to or greater than mark.
// Check if john is less than or equal to mark.
// Calculate the average age of john and mark and assign to a new variable



var johnAge = 45;
var markAge = 35;

if (johnAge > markAge) { console.log('john is older') }
else { console.log('mark is older') }

if (johnAge < markAge) { console.log('john is younger') }
else { console.log('mark is younger') }

if (johnAge == markAge) { console.log('both are of same age') }
else { console.log('not same') }

var catAge = johnAge;
console.log(catAge);

if (johnAge >= markAge) { console.log('johns age is equal or greater to mark age') }
else { console.log('its not greater or equal') }

if (johnAge <= markAge) { console.log('johns age is equal or less to mark age') }
else { console.log('its not less or equal') }

var average = (johnAge+markAge)/2;
console.log(average);
