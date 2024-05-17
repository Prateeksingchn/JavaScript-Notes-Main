// const myNubs = [1, 2, 3]

// const myTotal = myNubs.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);          
/* output=>                    ||  NOTE:-   
acc: 0 and currval: 1          ||  acc + currval = new acc (for next line) 
acc: 1 and currval: 2          ||  for ex- in this 0 + 1 = 1
acc: 3 and currval: 3          ||                  1 + 2 = 3
6                              ||                  3 + 3 = 6 (6 is final anwser, cozz the array value are upto 3)     
*/                                

/*---------------------------------------------------------------------------------------------------------------------------*/
// Same question as above using Arrow function ( => )  
// const myNubs = [1, 2, 3]

// const myTotal = myNubs.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);             //output=> 6

/*---------------------------------------------------------------------------------------------------------------------------*/
//Example:-

const shoppingCart = [
    {
        items: "js course",
        price: 2999
    },
    {
        items: "python course",
        price: 999
    },
    {
        items: "mobile dev course",
        price: 5999
    },
    {
        items: "data science course",
        price: 12999
    },
    {
        items: "java course",
        price: 4999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);                //output=> 27995