const accountId = 15
let accountEmail = "prateek@gmail.com"
var accountPassword = "12345"
accountCity = "Bhopal"
let accountState;` `


// accountId = 2 --> not allowed bcz const is permanent

accountEmail = "abc@gmail.com"
accountPassword = "3456"
accountCity = "indore"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
