// --syntax of switch-- \\
//key is the value which we want to check

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------
//example 1:-
// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;                         // agar break ko comment out kar diya then, uske baad ki saara code execute karta hai,execpt default
//         //                                then output will be- march april 
//     case 4:
//         console.log("april");
//         break;

//     default:

//     console.log("default case match");    //output=> march
//         break;
// }


// - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// example 2:- if month ke number ki jagh string value hoti, then->
const month = "jan"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("febuary");
        break;
    case "march":
        console.log("march");
        break;                         // agar break ko comment out kar diya then, uske baad ki saara code execute karta hai,execpt default
        //                                then output will be- march april 
    case "april":
        console.log("april");
        break;

    default:

    console.log("default case match");    //output=> January
        break;
}