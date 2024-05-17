// Immediately Invoked Function Expressions (IIFE)

//How to use IIFE
// ()()
// 1st perenthesis mein function ki definition
// 2nd perenthesis mein function ki execution


//sirf ese use karege toh error ayega, toh islye function ko () perenthesis ke andar daal denge-->
// function chai(){
//     console.log(`DB CONNECTED`);
// } ()

// like this, now no error
// (function chai(){
//     console.log(`DB CONNECTED`);     //output=> DB CONNECTED
// }) ()                         


    //What is IIFE?
    /* It stands for 'Immediately Invoked Function Expressions' jo function Immediately execute ho jaye, but this is wrong for interview
       Right Answer for intewrview--> 
       Global scope ke pollution se problem hoti hai sometimes, toh uss Global scope pollution ko hatane ke liye IIFE use hota hai */

//And there is a problem with IIFE, it doesnt know when toh end function thats why for that we have toh end the code  ourself using ;
//for ex-> 2 continous run nahi hote, run karne ke liye ; use karo

(function chai(){
    //this is named IIFE
    console.log(`DB CONNECTED`);     //output=> DB CONNECTED
}) ();

( (name) => {
    //this is simple IIFE, without name or un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);     //output=> DB CONNECTED TWO prateek
}) ('prateek') 