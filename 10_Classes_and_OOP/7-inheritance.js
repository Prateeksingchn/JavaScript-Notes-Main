class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

/* NOTE:-What is 'SUPER constructor' In the provided code in line-27, super(username) is calling the constructor of the parent class (User). 
   Here's what it does:
   1. The 'super()' function is used to call the constructor of the parent class ('User'). 
      It passes the 'username' parameter to the constructor of the 'User' class.
      
   2. In the context of inheritance, when you have a class ('Teacher') that extends another class ('User'), 
      the 'super()' function is used to invoke the constructor of the parent class ('User'). 
      This is necessary because the child class ('Teacher') may have additional attributes or behavior, 
      but you still want to initialize the properties defined in the parent class.  
      
      
   So, in the 'Teacher' class, it's ensuring that the 'username' property is initialized by calling 
   the constructor of the 'User' class with the provided 'username'. This allows you to reuse and extend 
   the functionality of the parent class while adding specific properties or methods in the child class.  */
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// const chai = Teacher("chai@teacher.com", "123")    //ERROR: Class constructor Teacher cannot be invoked without 'new'
const chai = new Teacher("chai@teacher.com", "123")   //output: A new course was added by chai@teacher.com

chai.addCourse()
const masalaChai = new User("masalaChai")

//masalaChai.addCourse() //here we are checking if the user 'masalaChai' has access to 'addCourse' or not
//                     ERROR- masalaChai.addCourse is not a function

masalaChai.logMe()     //output: USERNAME is masalaChai  (iska access hai)

console.log(chai === masalaChai);         //output: false
console.log(chai === Teacher);            //output: false
console.log(chai instanceof Teacher);     //output: true
console.log(chai instanceof User);        //output: true