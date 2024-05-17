//Bahar jo bhi likhte hia hai bo hai global scope
// var c = 300

// If ke andar jo bhi likhte hai, that is block or local scope
// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

/* in teeno conole-log ko run karege toh let & const ki values nahi aati */
// console.log(a);           //output=> error
// console.log(b);           //output=> error
// console.log(c);           //output=> 30

/*  if we write some other value in in global scope, for var it will not change, for ex- var c = 300, but the output willl still remian 30
    But if we change value for let & const than the value will be chnaged  */

// ---------------------------------------  Same chizz as above but for let & const in global scope  ----------------------------------------

// global scope-
let a = 300;
const b = 900;

//block scope
if (true) {
  let a = 10;
  const b = 20;
//   console.log("INNER:", a);          //output=> INNER: 10
}
// console.log(a);     //output=> 300
// console.log(b);     //output=> 900


// the scope which you use in your browser console, its different from the scope you use in your VScode console

// Basically ye jo curly braces hai yahi scope hai-
/* {
    let a = 10;
    const b = 20;
    console.log("INNER:", a);          //output=> INNER: 10
} */

//-------------------------------------------------------------------------------------------------------------------------------------------

//Nested scope

function one(){
    const username = "prateek"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

//we can do same thing with if else also, cozz if else bhi toh scope hi hai
if (true){
    const username = "prateek"
    if (username === "prateek") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);   //isko console.log karege toh error ayega, cozzz ye wale ko call kar rahe hai, and ye bhar hai, uske anadar exist nahi karta
}
// console.log(username);      //isko console.log karege toh error ayega, cozzz ye wale ko call kar rahe hai, and ye bhar hai, uske anadar exist nahi karta


// +++++++++++++++++++++++++++++++++++++++++++++     Interesting Question     ++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5));          //output=> 6
function addone(num){
    return num + 1
}

addTwo(5)                        //isss wale part mein error ayega, coz declare karte hue usse ek variable mein hold bhi kiya hai, and upar addone wale mein sirf declare kiya hai
const addTwo = function(num){
    return num + 2
}