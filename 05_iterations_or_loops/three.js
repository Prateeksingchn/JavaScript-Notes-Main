// loops in this lesson are used for Strings and Objects in 'Arrays':-
// ["", "", ""]  strings
// [{}, {}, {}]  objects


// "for of loop"

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);          //output=> 1 2 3 4 5
}


//example-
// const greetings = "heelo world"
// for (const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

/* ouput=> 
Each char is h
Each char is e
Each char is e
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
*/

//-------------------------------------------------------------------------------------------------------------------------------------------
/* Maps */
/* The Map object holds key-value pairs and remembers the original insertion order of the keys.
   Any value (both objects and primitive values) may be used as either a key or a value. */

/* Maps jis order mein aap insert karege uss order mein aapko yaad rakhta hai,
   whereas objects order ko yaad nahi rakhte waha kese bhi aa jata hai */  

// Maps mein koi bhi duplicate values nahi hoti, sab unique hoti hai

//Example:-
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('ARGN', "Argentina")
map.set('IN', "India")                 // even if values repeat hui, but still ek baar hi print hoga, no repition

// console.log(map);
/* output=>
  'IN' => 'India',
  'USA' => 'United States of America',
  'ARGN' => 'Argentina'
*/

//'for of' loop on Map
for (const [key, value] of map) {
    //console.log(key, ':-', value);
}
/* output=>
IN :- India
USA :- United States of America
ARGN :- Argentina
*/

//------------------------------------------------------------------------------------------------------------------------------------
//'for of' loop on object

const myObject = {
    'game1': 'NFS',
    'game2': 'CS',
    'game3': 'SPIDERMAN'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);            //error- myObject is not iterable
}
// for of loop, doesn't work on object
// iske liye "for in loop" use hota hai //cod ein four.js

//--------------------------------------------------------------------------------------------------------------------------------