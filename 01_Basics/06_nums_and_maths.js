// -----------------------  NUMBERS  --------------------------

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  //output=> 100.00

// const otherNumber = 23.8966    //23.9    (for precision-3)
const otherNumber = 123.8966   //124     (for precision-3)
// const otherNumber = 1123.8966  //1.12e+3 (for precision-3)
// const otherNumber = 1123.8966  //1124    (for precision-4)
// console.log(otherNumber.toPrecision(4));

const hunderds = 1000000
// console.log(hunderds.toLocaleString('en-IN'));  //10,00,000 in india stylet


//+++++++++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); //output=> 4
// console.log(Math.abs(4)); //output=> 4
// console.log(Math.round(4.3)); //output=> 4 (round off value) 
// console.log(Math.ceil(4.2)); //output=> 5 (ceil means top, that's why top wali hi value choose karega = 5)
// console.log(Math.floor(4.9)); //output=> 4 (floor means bottom, that's why bottom wali hi value choose karega = 4)
// console.log(Math.min(4, 3, 6, 9)); // used for Min value in Array
// console.log(Math.max(4, 3, 6, 9)); // used for Max value in Array

console.log(Math.random());                      //ye 0. something value deta hai, basically 0-1 ke beech mein value deti hai
console.log((Math.random()*10) + 1);             //
console.log(Math.floor(Math.random()*10) + 1);   //maths.floor use kiya hai, that's whyy + 1, kiya nahi toh zero le leta, 1 se toh upar ho sakta hai kitni bhi

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1))) + min) //jab max,min bhi use karna hota hai isliye (max - min + 1) ye part multiply kiya coz range aa jaye, and min add kiya


