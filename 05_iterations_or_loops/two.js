// "While & do While loop"


// ** "while loop" ** \\
// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2     //output=> agar + 2 hai toh 0 se 10 tak value print hogi, but ye values 2-2 ke gap mein hogi, | 0, 2, 4, 6, 8, 10 
//     // index = index + 1     //output=> agar + 1 hai toh 0 se 10 tak value print hogi
//     // index = index +       //output=> agar +  hai toh 0 ka infinite loop banega
// }


//example:- for Array
// let myArray = ['flash', 'batman', 'superman']

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);    
//     arr = arr + 1    
    
// }

// -----------------------------------------------------------------------------------------------------------------------------------
// ** "do while loop" **
// phele kaam hota hai and then condition end mein check hoti hai.


// example:-
// let score = 1

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);                    //output=> 1 se 10 tak values print ho jayegi


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//example:-
// let score = 11                            // agar 11 likh diya and 11 tak toh loop hi nahi hai, but this is "do while loop" 
//                                           // toh phele execute ho jayega, then condition check hogi 

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);                    //output=> score is 11