const coding = ["js", "ruby", "python", "java", "cpp"] 


// 1st way
// coding.forEach( function (val){
//     console.log(val);          //output=> js ruby python java cpp
// })


// - - - - - - - - - - - - - - - - - - - - - - - - - -
// 2nd way
// coding.forEach( (item) => {
//     console.log(item);         //output=> js ruby python java cpp
// })


// - - - - - - - - - - - - - - - - - - - - - - - - - -
// 3rd way
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)        //output=> js ruby python java cpp


// - - - - - - - - - - - - - - - - - - - - - - - - - -
// 4th way
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})
/* output=>
js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
python 2 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
java 3 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
*/
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "pyt"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);       //output=> javascript java python
    console.log(item.languageFileName);   //output=> js java pyt
})