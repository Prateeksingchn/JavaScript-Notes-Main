
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@mal.com", "123")
// console.log(chai.encryptPassword());    //output: 123abc
// console.log(chai.changeUsername());     //output: CHAI



//behind the scene (if class functionality nahi mili hoti)

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@mal.com", "123")
console.log(tea.encryptPassword());    //output: 123abc
console.log(tea.changeUsername());     //output: TEA