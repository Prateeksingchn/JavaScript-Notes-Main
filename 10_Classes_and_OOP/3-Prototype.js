// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.prateek = function(){
    console.log(`prateek is present in all objects`);
}

Array.prototype.heyPrateek = function(){
    console.log(`prateek says hello`);
}

// heroPower.prateek()
// myHeros.prateek()
// myHeros.heyPrateek()
// heroPower.heyPrateek()


// -----------------------------------------------------
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// ----------------------------------------------------
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"prateek".trueLength()
"iceTea".trueLength()
 
/* output=>
   ChaiAurCode    
   True length is: 11
   prateek
   True length is: 7
   iceTea
   True length is: 6
 */