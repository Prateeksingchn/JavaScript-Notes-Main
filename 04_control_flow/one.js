//if 

// if (condition){
// }


//conditions are true & false--
// if (true){             //if true, then uske anadar ka code execute hota hai. 
// }

// if (false){            //if false, then uske anadar ka code execute nahi hota hai,
// }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

//Comparisn operators 
// <, >, <=, >=, ==, !=, ===, !==

// = (single equal value asign karta hai)
// == (double equal value check karta hai)
// != (not equal)
// === (triple equal type bhi check karke batata hai)

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// example_1:-
const isUserLoggedIn = true
const temperature = 41

// for temp-41
// if ( temperature === 41 ){
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");      //output=> less than 50       | /* isko direct ese hi likhege toh ye value bhi "temperature is greater than 50"
//                                                                temperature is     |    execute ho jayegi, but agar ise else ke andar likhege than nahi hogi jab 
//                                                                greater than 50    |    tak condition nahh met hoo */
// else{
//     console.log("temperature is greater than 50");     //else use karliya now, if or else mein se koi ek value ayegi
// }

/*-------------------------------------------------------------- */
// for temp- 40
// if ( temperature === 40 ){
//     console.log("less than 50");                       //outout=> temperature is greater than 50
// }
// else{
//     console.log("temperature is greater than 50");     
// }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//example_2:-
// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);     // output=> User power: fly
// }
// console.log(`User power: ${power}`);         // output=> User power: undefined
// // This will not run, cozz let & const ka scope hai local {}, iske bahar ye run nahi karega, isme koi problem nahi hai


// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);     //output=> User power: fly
// }
// console.log(`User power: ${power}`);         //output=> User power: undefined


// if(score > 100) {
//     var power = "fly"                            
//     console.log(`User power: ${power}`);     //output=> User power: fly
// }
// console.log(`User power: ${power}`);         //output=> User power: undefined
// // This will run, cozz var ka scope hai completely global

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//example_3:-
// const balance = 1000

// **** if (balance > 500) console.log("test"), console.log(test2); | we should not write code like this **** \\

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }
//output=> 1200

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//example_4:-
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// here we have used AND 
if (userLoggedIn && debitCard && 2==3){          // && use karke ek se zada statement check kar sakte hai (ye "AND" ye condition), saari condition true aani chaiye
//                                                  And agar ek bhi statement flase hua then, code execute nahi hoga, for ex- 2==3 false hai then,
//                                                  code will not execute, and if usse hata do than code will be executed.
    console.log("Allow to buy course");          // output=> Allow to buy course
}

// here we have used OR
if (loggedInFromGoogle || loggedInFromEmail){   // (double-pipe) || is used for "OR" statement, either this or that, koi bhi ek value true ho sakti hai
    console.log("user logged in");
}


