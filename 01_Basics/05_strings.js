const name = "prateek"
const repCount = 50

// console.log(name + repCount + " Value");

console.log(`Hello my name is ${name} and my repo count is $
{repoCount}`);

const gameName = new String('prateekkk-pc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));  //2 pe konsa character hai 
// console.log(gameName.indexOf('t'));  // for ex- t konse position pe hai

// const newString = gameName.substring(0, 4)  //output=> prat (esaa karne pe last wali value include nahi ho rahi hai, nahi toh prate output hota.)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);  //ouput => rat


//************************************************/

// const newStringOne = "  pateek  "

// console.log(newStringOne);
// console.log(newStringOne.trim);

//************************************************/
const url = "https://prateek.com/prateek%20chouhan"
console.log(url.replace('%20', '-'));
console.log(url.includes('prateek'));  //output=> true

console.log(gameName.split('-'));