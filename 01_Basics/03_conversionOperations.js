// let score = "33"
// let score = "33abc"
// let score = null
let score = undefined


// you can write both ways->
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);



// NOTES-------->

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0



// -------------------------------------------------------------------------------------------------------
// FOR BOOLEAN CONVERSION->
// let isLoggedIn = 1
// 
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "prateek" => true

// ---------------------------------------------------------------------------------------------------------
// FOR STRING CONVERSION-->
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************************************* Operations ******************************************************

let value = 3
let negValue = -value
// console.log(negValue);

// -------------------------------------------------------------------------------------------------------------------
// BASIC OPERATIONS-->

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// --------------------------------------------------------------------------------------------------------------------

let str1 = "hello"
let str2 = " prateek"

let str3 = str1 + str2
// console.log(str3);

// output hello prateek  (if you don't give space before prateek the output will be-helloprateek)

// -------------------------------------------------------------------------------------------------------------------


// console.log("1" + 2);  // output => 12
// console.log(1 + "2");  // output => 12
// console.log("1" + 2 + 2);  // output => 122
// console.log(1 + 2 + "2");  // output => 32
// 
// console.log((1 + 2) * 5 % 2);  // output => 1

// agar string first hai toh sabhi ko string treat kiya jayega
// AND agar string last mein hai toh phele wala conversion ho jayege



// **********************************************************************

// console.log(true);   //output => true
// console.log(+true);  //output => 1
// console.log(+"");    //output => 0

// **************************************************************************

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;   //can be written in both ways  
++gameCounter;   //can be written in both ways
console.log(gameCounter);   //output => 101

// link to study-->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment