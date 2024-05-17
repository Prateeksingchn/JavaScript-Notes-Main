
/*   "JavaScript is dynamically typed. This means that the data type of a variable is interpreted during runtime, ||
||   and you don't need to specify the type explicitly. Variables can dynamically hold values of any type,        ||
||   and their types can change during the execution of the program. This flexibility can be both powerful and    ||
||   sometimes challenging to manage, depending on the context."                                                  ||
------------------------------------------------------------------------------------------------------------------*/



/* "kis tarah se data ko memory mein store hote hai" and "kisss tarah se apan unhe access kar sakte hai"-->
    these are the only two ways on which datatypes are defined-->

1. Primitives =>   
7 types : String, Number, Boolean (yes/no/true/false), null, undefined, Symbol, BigInt (saari values vese number mein cover ho jati hai, par  
-                                                                                   kuch scientific values no nahi ho sakti vo isme aati hai) */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherid = Symbol('123')

//console.log(id === anotherid);  //output => false

// const bigNumber = 34363739629009829n


//**************************************** */
// 2.Refrence (Non-Primitive) =>
// Array, Objects, Functions 

//(ARRAY)
const heros = ["shaktiman", "naagraj", "doga"]  

//Objects- curly bracket ke andar jitni bhi values hai vo object hai, datatypes kuch bhi ho sakta hai
let myObj = {
    name: "hitesh",
    age: 22,
}

//Function
const myFunction = function(){
    console.log("hello world");
}


// How to find out what is the datatype-->
// console.log(typeof myFunction);  //output=> function
// console.log(typeof heros);  //output => object
// console.log(typeof bigNumber);  //undefined
// console.log(typeof score);  //number
// console.log(typeof scoreValue);  //number
// console.log(typeof isLoggedIn);  //boolean
// console.log(typeof outsideTemp);  //object
// console.log(typeof id);  //symbol

//------------------------------------------------------------------------------------------------------------------------------------------------||||||||||

// Stack (Primitive), Heap (N0n-Primitive)



//This is for STACK-->
//stack mein jab bhi koi edit karte hai toh vo as copy mein karte hai, thats whyy output is different.👍
let myYoutubename = "prateekdotcom"

let anothername = myYoutubename
anothername = "prateek_odessy"

console.log(myYoutubename); //output => prateekdotcom
console.log(anothername);  //output => prateek_odessy



//This is for HEAP-->
//where as in HEAP mein jab bhi koi changes karte hai toh voh orginal value ke anadar hi karte hai, thats whyy output is same.👍
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne


//object mein .(email) koi bhi chizzz ese karke hi access karte hai
userTwo.email = "prateek@google.com"

console.log(userOne.email);  // output => prateek@google.com  
console.log(userTwo.email);  // output => prateek@google.com

