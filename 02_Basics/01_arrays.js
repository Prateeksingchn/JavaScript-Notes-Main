//Array
/* The Array object, as with arrays in other programming languages,
   enables storing a collection of multiple items under a single variable
   name and has members for performing common array operations.
   READ MORE ON Mdn.com JS */

//const myArr = [0, 1, 2, 3, 4, 5]
//console.log(myarr[0]);  //output=> 0         /* js mein arrays zero(0) se start hota hai,isliye 1st
//console.log(myarr[0]);  //output=> 0        elements 0 se find kiya, also known as zero-based indexing */


//-----------------------------------------------------------------------------------------------------------------
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);

// Array Methods
// myArr.push(6)         //output=> [0, 1, 2, 3, 4, 5, 6]
// myArr.push(7)   
// myArr.pop()           //output=> [ 0, 1, 2, 3, 4 ]

// myArr.unshift(9)         // 9 insert kardiya start mein, before zero
//myArr.shift()         /* output=> [ 1, 2, 3, 4 ], | 9 remove kardiya start mein se, and agar unshift hatake 
//                             sirf shift use karoge for orignal array then, zero bhi gayab ho jayega */

// console.log(myArr.includes(9));  //this is used for asking the questions. | output=> false
// console.log(myArr.indexOf(9));  //output=> -1 (koi bhi value hogi bo array mein nahi hai, 
//                             then -1 hi aygega, but if values jo hai for ex- 3 then -> output=> 3)


// const newArr = myArr.join() //converts arrays to string

// console.log(myArr);
// console.log(newArr);  

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

//*********    slice, splice   **********/
// important topic for interview, difference between them

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //splice manipulate the array, but slice don't
                                 //splice ko slice ke baad use karne se slice portion gayab hi ho gaya hai
console.log("C ", myArr);
console.log(myn2);

/* output=> for above
A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]
C  [ 0, 4, 5 ]
[ 1, 2, 3 ]
*/