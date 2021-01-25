// Coerción implícita

var a = 4 + "7"; // 47 

typeof a; // string

var b = 4 * "7" // 28

typeof b; // number

// Coerción explícita ***

var a = 20;
var b = a +"";
console.log(b);
typeof b; // string

var c = String(a); //***
typeof c; // string

console.log(c);

var d = Number(c); //***
typeof d; // number
