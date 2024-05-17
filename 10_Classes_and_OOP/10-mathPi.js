const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);   
/*Output:  PI values is set using all these condition so it cannot be change
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

// console.log(Math.PI);    //Output: 3.141592653589793
// // Math.PI = 5
// console.log(Math.PI);

/* ------------------------------------------------------------------------------------- */
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}
// console.log(chai);  //output: { name: 'ginger chai', price: 250, isAvailable: true }
// console.log(Object.getOwnPropertyDescriptor(chai, ));   //output: undefined (cozzz chai property ka description nahi hai, name description hai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"));  
/* Output:
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/


// PI ke jesi fixed value dedi
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* Output: 
{
  value: 'ginger chai',
  writable: false,
  enumerable: true,
  configurable: true
}
*/


//for loop
for (let [key, value] of Object.entries(chai)) {        //| Output:-       
    if (typeof value !== 'function') {                  //| name : ginger chai                                                       
        console.log(`${key} : ${value}`);               //| price : 250              
    }                                                   //| isAvailable : true       
}                                                        