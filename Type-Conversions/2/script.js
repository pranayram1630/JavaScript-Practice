// 2. Output of the code below
// Convert num into string
var num = 45;
num = String(num);
console.log(typeof num);


// String(num);
// answer will be 45 but type will be string.
String(321);
// 321 output but it will be string//
String(300 + 23);
console.log(typeof String(321));
// 323 output but type string

String(false);
console.log(typeof String);
// function

String(true);
console.log(typeof String);
// function


Number("3.18");
console.log(typeof Number);
// function

Number(" ");
console.log(typeof Number);
// function

Number("");
console.log(typeof Number);
// function

Number("22 44");
console.log(typeof Number);
// function

Number(false);
console.log(typeof Number);
// function

Number(true);
console.log(typeof Number);
// function