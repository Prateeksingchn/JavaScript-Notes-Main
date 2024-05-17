//this is way to do it-->
// const coding = ["js", "ruby", "python", "java", "cpp"] 

// coding.forEach( (item) => {
//     console.log(item);         //output=> js ruby python java cpp                                    
// })


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//But if we try to this way, then output=> undefined, not matter what
// const coding = ["js", "ruby", "python", "java", "cpp"] 

// const values = coding.forEach( (item) => {
//     // console.log(item);          //output=> js ruby python java cpp undefined | this will be the output if both the console.log is active      
//     return item                            
// })
// console.log(values);               //output=> undefined  | if sirf ye console.log chale

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// "Filter"
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);                               //output=> [ 5, 6, 7, 8, 9, 10 ]

/* NOTE- filter ke anadar apan ko ek callback function milega, jo har ek value ko access karega,
   *uske baad apan ko ek condition deni hoti hai, jo jo condition ko satisfy karege woh saari return ho jayegi,
   varna vo values return nahi hogi */


// mistake most people do-->
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter( (num) => {
// //     num > 4})                                 // if you do like this then, output=> [] , empty array cozz apan ne scope {} open kardiya

// const newNums = myNums.filter( (num) => {
//     return num > 4})                            // isliye if we have to use this, always write return
// console.log(newNums);          


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//when we have to do same thing as 'filter', but using 'for each'

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);         //output=> [ 5, 6, 7, 8, 9, 10 ]

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//example->

const books = [
    { title: 'Book One', genre: 'fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non-fiction', publish: 1981, edition: 1989},
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History')

console.log(userBooks);        

//  output=> for publish >= 1995 and genre history      ||             /* output=> for genre history only                    
//  [                                                   ||             [
//   {                                                  ||               {
//     title: 'Book Three',                             ||                 title: 'Book Three',
//     genre: 'History',                                ||                 genre: 'History',
//     publish: 1999,                                   ||                 publish: 1999,
//     edition: 2007                                    ||                 edition: 2007
//   }                                                  ||               },
//  ]                                                   ||               {
//                                                      ||                 title: 'Book Seven',
//                                                      ||                 genre: 'History',
//                                                      ||                 publish: 1986,
//                                                      ||                 edition: 1996
//                                                      ||               }
//                                                      ||             ]
//                                                      ||             */

/* ******************************************************************************************************************************************** */