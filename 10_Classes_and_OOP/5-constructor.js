/* " CONSTRUCTOR "
In JavaScript, a constructor is a special method that gets called when an object is instantiated from a class. 
It is used to initialize the object's properties and set up its initial state. 
Here's a simple explanation of how constructors work in a class in JavaScript: */

// 1. Class Declaration:
//    First, you declare a class using the 'class' keyword. For example:
class Animal {
    // constructor will be defined here
  }
  

// 2. Constructor Method:
//    Inside the class, you define a method called 'constructor'. 
//    This method is automatically called when an object is created from the class.
class Animal {
    constructor() {
      // initialization code goes here
    }
  }
  

// 3. Initializing Properties:
//    Within the 'constructor' method, you can initialize properties of the object using the 'this' keyword.  
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  

// 4. Creating Objects:
//    Now, you can create instances (objects) of the class using the 'new' keyword. 
//    The 'constructor' will be automatically called during the object creation process.  
// const myPet = new Animal("Fluffy", 3);



// 5. Object Initialization:
//    When the object is created, the 'constructor' method is executed,
//    and the properties are initialized with the provided values.
console.log(myPet.name); // Output: Fluffy
console.log(myPet.age);  // Output: 3



// Here's the complete example:
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const myPet = new Animal("Fluffy", 3);
  console.log(myPet.name); // Output: Fluffy
  console.log(myPet.age);  // Output: 3

  
/* In summary, the constructor is a method in a class that runs automatically when you create an object from that class. 
   It is used for setting up the initial state of the object by initializing its properties. */  