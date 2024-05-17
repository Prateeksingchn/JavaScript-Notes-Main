// What is "Bind" ?
/* 
In JavaScript, the 'bind' method is used to create a new function that, when called, 
has its 'this' keyword set to a specific value, with a given sequence of arguments 
preceding any provided when the new function is called. */

/* Here's a simple explanation: 

// 1. Setting the 'this' Value:
When you have a function in JavaScript, the value of 'this' is determined by how the function is called.
The 'bind' method allows you to explicitly set the value of 'this' for a function.


// 2. Creating a New Function:
'bind' doesn't immediately invoke the function. Instead, it creates a new function with the specified 'this' value. */

// 3. Example:
const person = {
  name: "John",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

const greet = person.sayHello.bind(person);
greet(); // Output: Hello, John!
  
/* In this example:

'bind(person)' creates a new function 'greet' 'where' 'this' is explicitly set to the 'person' object.
When 'greet' is called, it still refers to the 'sayHello' method of the 'person' object. 


// 4.Preserving Arguments:
You can also use bind to "lock in" certain parameters of a function, creating a partially applied function.
This is useful in scenarios where you want to preset some arguments but leave others flexible. */

function multiply(x, y) {
  return x * y;
}

const double = multiply.bind(null, 2); // Presetting the first argument
console.log(double(5)); // Output: 10

//In this case, 'double' is a new function derived from 'multiply' with the first argument preset to '2'.  

/* In summary, 'bind' is a method that provides control over the value of 'this' when a function is invoked, 
   allowing for the creation of new functions with a specific context or partially applied arguments. */