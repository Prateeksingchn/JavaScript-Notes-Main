// Iterations is also known as Loops

// "LOOPS"
// 1. for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);

// }                                 
//ouput=> 0 1 2 3 4 5 6 7 8 9
//And agar 10 bhi print karana hai toh use <= 


//example-
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);

// } 
/* output=>
0
1
2
3
4
5 is the best number
5
6
7
8
9
10
*/

//------------------------------------------------------------------------
//example:- loop ke andar loop
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);  //output 1 
        // console.log(i + '*' + j + ' = ' + i*j );     // i times j equals_to i multiply j  //output2
        
    }
    
}
//output 1=> 1 outer loop fir 10 baar inner looop, then again 1 baar outer loop fir 10 baar inner loop
// output ek baar print karke dekh lena jab dekhna ho, cozzz its bhot lamba

//output 2=> 1 se 10 tak ki table print hui hai


//----------------------------------------------------------------------------------------------------------------
//example using Array

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);             //output=> Array length is 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);                //output=> flash batman superman
}

/* agar ye line mein | (let index = 0; index < myArray.length; index++) | 
   "<" ki jagah  "<=" daal diya then array ki values-> flash batman superman
    ke saath saath undefined bhi ayega.

* index++ ki jagah agar index likh diya then, flash hi print hota rahega continously    

*/

//------------------------------------------------------------------------------------------------------------------------
//TOPIC-

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);   // jese hi break use kiya and if condition lagadi, then "Detected 5" print ho jayega and uske baad loop chalna band, 5 pe ruk jaeyega
        break
    }
    console.log(`Value of i is ${index}`);       //output=> value of i = 1 se 20, tak print ho gaya
    // Agar index ko ()isme laga diya toh ye print hoga=> $(index)
    // but if {index} ese likha then 1 se 20 tak values print ho jayegi
    
}

//example-
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);   
        continue                  // continue mein jispe if condition lagai hai, woh detect ho jayega par print fir bhi nahi hoga and then uske baad wali values bhi print ho jayegi
    }
    console.log(`Value of i is ${index}`);

}    