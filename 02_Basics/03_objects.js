//Singleton - jo constructor se banta hai
// Object.create   //Ye method se bhi object create ho jata hai



//obeject literals

const mySym = Symbol("key1")

const JsUser = {
    name: "prateek",
    "full name": "prateek singh chouhan",
    [mySym]: "mykey1",  //if we have to use symbol in object we use square brackets
    age: 21,
    location: "bhopal",
    email: "prateek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


//How to access object, two ways-------->
// console.log(JsUser.email);  //1st one
// console.log(JsUser["email"]);  //2nd one

// console.log(JsUser."fullname");   //we cant give it like this, so we use-->
// console.log(JsUser["full name"]);    //this method
// console.log(typeof JsUser.mySym);    // before not using square bracket- type was string
// console.log(JsUser[mySym]);          // square bracket use karke symbol represent karte hai


//How to change the value of object-----> 
JsUser.email = "prateek@gpt.com"     // ye change ho jayega cozzz, iske baad obejct.freeze lagaya hai
// Object.freeze(JsUser)                // using this we freeze the object, now we cannot change the values, even if we change, the value wont show
JsUser.email = "prateek@amazon.com"  // ye change nahi hoga, cozz isse phele freeze laga hai
// console.log(JsUser);

/* ouput in console
{
  name: 'prateek',
  'full name': 'prateek singh chouhan',
  age: 21,
  location: 'bhopal',
  email: 'prateek@gpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/


//How add function in object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //"" to `` (string to backTick converting, known as string interpolation)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


