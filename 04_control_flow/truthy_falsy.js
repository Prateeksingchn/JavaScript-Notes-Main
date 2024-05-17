
/* falsy values *

All the values below are falsy values->
 false, 0, -0, BigInt On, "", null, undefined, NaN

----------------------------------------------------------------------------------
* truthy *
all those values which are not falsy are truthy values

some other truthy values are as follows-

1. string ke andar jo bhi value ho voh truthy value hai like-
   "0", 'false', " ",

2. empty Array [] and empty Object {}

3. function(){} , if a function is declarec like this it is also a truthy value */


// example:-
// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else{
//     console.log("Don't have user email");
// }

// above its given Array, and below is how we check array
// if (userEmail.length === 0) {
//     console.log("Array is empty");        //output=> Got user email
//     //                                               Array is empty
// }


//example:- empty object
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");          //output=> Got user email
//     //                                                  Object is empty
// }


/* -------------------------------------------------------------------------------------------------------- */
// **Can be important for Interview**-
// false == 0     //output=> true (in browser console)
// false == ''    //output=> true (in browser console)      
// 0 == ''        //output=> true (in browser console)      
/* -------------------------------------------------------------------------------------------------------- */

//TOPIC-
// Nullish Coalescing OPerator (??): null undefined

// let val1;
// val1 = 5 ?? 10             //output=> 5  
// val1 = null ?? 10          //output=> 10  (null and undefined mein ?? ke baad ki value asign ho jati hai, ya fir agar nahi honi hoti hai toh callback ayega then null ya undefined hi aa jayega)    
// val1 = undefined ?? 15     //output=> 15  (null and undefined mein ?? ke baad ki value asign ho jati hai, ya fir agar nahi honi hoti hai toh callback ayega then null ya undefined hi aa jayega)   
// val1 = null ?? 10 ?? 20    //output=> 10  (jo phele assign kardi woh hi hogi)
// ye basically kisi ki jagh kuch aur values assign karne mein help karta hai,for ex- agar error aa jaye toh uski jagh kya value assign karni hai

// console.log(val1);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \\
// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");  //output=> less than 80
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");  //output=> more than 80





