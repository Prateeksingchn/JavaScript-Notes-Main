function sayMyName() {                 //sayMyName is function name\\
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("E");
    console.log("E");
    console.log("K");
}
// sayMyName()                           // this is how you call a functions,| ()ye use karke functions ka refrence hota hai,| Agar () ye use nahi karte then output kuch bhi nhai ata \\





//------------------------------------------------------------------------------------------------------------------------------------
// "# Adding Two or more Numbers in JAVAScript" \\

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

// const results = addTwoNumber(3, 4)        //output=> 7
// addTwoNumber(3, "4")      //output=> 34 

// console.log("Result: ", result);       //output=> undefined


//---------------------------------------------------------------------------
function addTwoNumber(number1, number2){

    // ye ek tarika hai return ka \\
    // let result = number1 + number2
    // return result
    // console.log("prateek");         
    /*ye consolelog ka code kabhi execute nahi hoga, cozz return ke baad 
    koi bhi code execute nahi hota hai, but agar ye conolelog return ke upar hota then ye print ho jata */


    // and ye ek tarika hai \\
    return number1 + number2
}
const result = addTwoNumber(3, 4)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){            /*ye = sam, deke ek default value daaldi, agar koi username nah bhi hoga tb bhi,
    //                                                sam ayega and agar koi value jese "prateek pass kardi then woh value over write ho jayegi" */

    // either you can write like this-->
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }

    // Or you can write like this-->
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("prateek"));    //output=> prateek just logged in
// console.log(loginUserMessage(""));           //output=> just logged in
// console.log(loginUserMessage());             //output=> undefined just logged in




//---------------------------------------------------------------------------------------------------------------------------------------------

// function calculateCartPrrice(...num1){               // ye ... lagane se saari values arrays mein aa gayi
//     return num1 
// }
function calculateCartPrrice(val1, val2, ...num1){      // ye ... lagane se saari values arrays mein toh ayegi hi,and val1 val2 array mien se hat jayegi ||| output=> [500, 2000]
    return num1 
}

// console.log(calculateCartPrrice(200, 400, 500, 2000));   //output=> [200, 400, 500, 2000]

const user = {
    username: "prateek",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)    //output=> username is prateek and price is undefined

// handleObject({           //direct values bhi de sakte hai, object banake
//     username: "sam",
//     price: 399
// })


const myNewArray = [200, 400, 100, 600]  //or we can make Arrays too

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));                //output=> 400
// console.log(returnSecondValue([200, 600, 100, 500]));      //output=> 600, similarily object ki tarah we can diretly add value to consolelog 