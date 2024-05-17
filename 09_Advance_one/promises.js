// const promiseOne = new Promise(function(resolve, reject){         //promise ke 2 part hia resolve and reject(yaa toh resolve hoga ya reject)
//     //Do an async task   
//     //like- DB calls, cryptography, network
//     setTimeout(function(){                                        //agar setTimeout ki jagh setInterval use kiya toh "Async task is complete" baar baar print hoga(islye use matt karna)
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){                  //the is directly related to resolve
//     console.log("Promise consumed");
// })

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//this is a simpler way to do, the code above
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "prateek", email: "prateek@example.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "prateek", passwword: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {                   //|    *if condition in line-37 is true then,       
    console.log(user);              //|    output=> ERROR: Something went wrong
    return user.username            //|             
}).then((username) => {             //|    *if condition in line-37 is false then,       
    console.log(username);          //|    output=> { username: 'prateek', passwword: '123' }            
}).catch(function(error){           //|               prateek  
    console.log(error);             //|                     
}).finally(() => console.log("The promise is either resolved or rejected"))                                                        

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Instead of using '.then', | we can also use 'async await'
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Javascript", passwword: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


//You can use both, Either this
// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive()

//Or this
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
/* NOTE:-
   when using the 'fetch' function in JavaScript, it is common to use 'await', especially if you are working within an asynchronous function. 
   The 'fetch' function is asynchronous and returns a 'Promise' that resolves to the Response to that request, whether it is successful or not. */ 

// try catch fromat   
// async function getAllUsers(){                                                                   
//     try {                                                                                                              
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')                                               
//         const data = await response.json()                                                                                    
//         console.log(data);                                                                                      
//     } catch (error) {                                                                                          
//         console.log("E: ", error);                                                                              
//     }                                                                                     
// }                                                                                          

// getAllUsers() 

//-----------------------------------------------------------------------------
// same code as above
// then catch fromat 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))           

//isme directly fetch kiya hai, isliye function call karne ki zarurat nahi hai
