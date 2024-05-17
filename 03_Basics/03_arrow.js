// "Arrow function-->"

const user = {
    username: "prateek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);  //this humesha current context ki baat karta hai
    }
}


// user.welcomeMessage()      // output=>prateek , welcome to website

// user.username ="vader"     // vader aayega output mein cozzz this.username use kiya tha     
// user.welcomeMessage()      // output=>vader , welcome to website

// console.log(this);         //output=> {} , empty object ayega

// ---------------------------------------------------------------------------------------------------------------------------

// function chai(){
    // let username = "prateek"
    // console.log(this);             //output=> bhot saari values aati hai, ja chaiye ho tab run karke dekh lena
    // console.log(this.username);    //output=> undefined
// }
// chai()

/* - - - - - - - - - - - - - - - - - - - - - - - - - */

// const chai = function (){
//     let username = "prateek"
//     console.log(this);             //output=> bhottt saari values
//     console.log(this.username);    //output=> undefined
// }
// chai()

/* - - - - - - - - - - - - - - - - - - - - - - - - - */

// const chai =  () => {              // function hatake, simply => karke bho Arrow function le sakte hai
//     let username = "prateek"
//     console.log(this);             //output=> {} | empty perenthesis
//     console.log(this.username);    //output=> undefined
// }
// chai()


//** NOTE  ** IMPORTANT ** \\
/*  Diffrence b/w "function" and "=>" is that-->
    "function" mein this & this.username mein bhott saari values and undefind ataa hai respectively
    And "=>" mein this & this.username mein {} |empty and undefind ataa hai respectively */

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//What is ARROW function?
//Basic syntax of arrow function- () => {}


// This is Explicit return-(Explicit are those jisme return use karte hai)
// const addTwO = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwO(3, 4));     //output=> 7



// below ones are Implicit retun-(Implicit are those jisme return nahi likhte)
// can also be wwriten as--
// const addTwO = (num1, num2) =>  num1 + num2


// can also be wwriten as--
// const addTwO = (num1, num2) =>  (num1 + num2)  /*perenthesis ke anadar likhdo and perenthesis use karoge toh return nahi likhna padega,
//                                                  but agar, {} curly bracket ke andar likha toh return keyword likhna padega */

// console.log(addTwO(3, 4));     //output=> 7


//now what if we have to run Object and object are in {} curly bracket, then object ko bhi ()perenthesis ke anadar daalte hai
// const addTwO = (num1, num2) =>  {username: "prateek"}     //output=> undefined
const addTwO = (num1, num2) =>  ({username: "prateek"})   //output=> { username: 'prateek' }
console.log(addTwO(3, 4));