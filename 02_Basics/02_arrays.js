const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]


//this is pussh operator\\
// marvel_heros.push(dc_heros)        //push dc_heros bhi ek element ban jayega, but concat mein esa nhi hota  
// console.log(marvel_heros);         //output=> [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ] ,                                      
// console.log(marvel_heros[3][1]);   //output=> batman


//this is concat operator\\
// const allHeros = marvel_heros.concat(dc_heros)  // concat two ya usse zdaa arrays ko merge karta hai, it has limitations upto 2 elements  \\
// console.log(allHeros);            // output=>  [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ] , 


//--> This is the easiest method to merge the arrays <--\\
//this is spread operator\\
// const all_new_heros = [...marvel_heros, ...dc_heros]   // its has  no limitations, we can add any numb of arrays
// console.log(all_new_heros);         //output=> [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]




// Flat method
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// Returns a new array with all sub-array elements into a one single array, upto the specified depth. for ex- in this ques- there are 3 depths
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);  // output=>  [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]   


// is type
console.log(Array.isArray("prateek"));   //output=> false, | AND to convert this to array we use the method below


// from type
console.log(Array.from("prateek"));      //ouput=> [ 'p', 'r', 'a', 't', 'e', 'e', 'k' ]
console.log(Array.from({name: "prateek"}));      //ouput=> [ 'p', 'r', 'a', 't', 'e', 'e', 'k' ] []  ,|-(imp for interview)-| there is an empty array cozz we didnt specify it



// of type
let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));  //output=> [ 100, 200, 300 ]





