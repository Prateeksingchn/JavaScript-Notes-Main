const user = {
    username: "prateek",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);   //output=> username: prateek          || //isko back-tick ke andar dalna padhta hai, if we put in 
        // // console.log('username: ${this.username}');   //output=> username: ${this.username} || //sigle inverted comma then, it wont give the correct output
        // console.log(this);   
        // output=> in local scope
        // {
        //    username: 'prateek',
        //    loginCount: 8,
        //    signedIn: true,
        //    getUserDetails: [Function: getUserDetails]
        // }

    }                                     
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);      //output=> this will give {} empty string, cozz its in global scope

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function User(username, loginCount, isLoggedIn){
    this.username = username;         // inn mein left-side wali variable hai | & | right-side wali jo values pass kr rahe hai
    this.loginCount = loginCount;     // inn mein left-side wali variable hai | & | right-side wali jo values pass kr rahe hai
    this.isLoggedIn = isLoggedIn      // inn mein left-side wali variable hai | & | right-side wali jo values pass kr rahe hai 

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

/*NOTE- 1. 'new' keyword use karne se 1 empty object create hota hai, known as instance(basically an empty perenthesis is generated which is the object) 
        2. A constructor function is called due to new function
        3. Jo bhi this keywword likhe hai, vo inject ho jaate hai
*/ 
const userOne = new User("prateek", 12, true)         // inn dono mein new likhne se userTwo ki values overwrite nahi karegi userOne ko  
const userTwo = new User("ChaiAurCode", 11, false)    // inn dono mein new likhne se userTwo ki values overwrite nahi karegi userOne ko
console.log(userOne.constructor);                     // what is constructor? The initial value of Object.prototype.constructor is the standard built-in Object constructor
//console.log(userTwo);
