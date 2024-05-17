/* for in loop */

// for of loop, doesn't work on object
// We use for in loop

const myObject = {
    js: 'jaavscript',
    cpp: 'c++',
    rb: 'ruby',
    ts: 'typescript'
}
for (const key in myObject) {
    // console.log(myObject[key]);  //output=> jaavscript c++ ruby typescript
    // console.log(`${key} sortcut is for ${myObject[key]}`);  //output=> js sortcut is for jaavscript
    //                                                                 cpp sortcut is for c++
    //                                                                 rb sortcut is for ruby
    //                                                                 ts sortcut is for typescript
        
    }


// -- - - - - - - - - - -- - - - - - -- - - - - - - - - - - -  - - - - - - - -
//for in loop for Array
const programming = ["js", "rb", "py", "java", "cpp"]    

for (const key in programming){
    // console.log(key);                       //output=> 0 1 2 3 4
    // console.log(programming[key]);          //output=> js rb py java cpp
}

// -- - - - - - - - - - -- - - - - - -- - - - - - - - - - - -  - - - - - - - -
//"for in loop" for maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('ARGN', "Argentina")
map.set('IN', "India") 

for (const key in map) {
    console.log(key);         //output=> no output, map mein nahi chalta ye, cozzz map mein iteration nahi hota
    }