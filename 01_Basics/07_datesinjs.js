//Dates

let myDate = new Date()
// console.log(myDate.toString());       //output=> Wed Feb 28 2024 09:01:02 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());   //output=> Wed Feb 28 2024
// console.log(myDate.toLocaleString()); //output=> 2/28/2024, 9:05:39 AM
// console.log(myDate.toISOString());    //output=> 2024-02-28T03:32:54.064Z
// console.log(myDate.toJSON());         //output=> 2024-02-28T03:33:02.674Z
// console.log(typeof myDate);           //output=> object


//--> NOTE- Month zero se start hote hai JS mein, jab single digit mein likho tab
// let myCreatedDate = new Date(2023, 0, 23)   //format-1 for writing date
// console.log(myCreatedDate.toDateString());  //output=> Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  //format-2 for writing date
// console.log(myCreatedDate.toLocaleString());     //output=> 1/23/2023, 5:03:00 AM


//--> NOTE- Month two digit mein likho tab 01 karke likhna padta hai
// let myCreatedDate = new Date("2023-01-15")   // YY/MM/DD
// console.log(myCreatedDate.toLocaleString()); //output=> 1/15/2023, 5:30:00 AM

let myCreatedDate = new Date("01-15-2023")   // DD/MM/YY
// console.log(myCreatedDate.toLocaleString()); //output=> 1/15/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  //output=> 1709092206642 (in milisecond)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //output=> 1709092419 (in milisecond)

let newDate = new Date()
console.log(newDate);             //output=> 2024-02-28T03:55:59.399Z
console.log(newDate.getMonth());  //output=> 1
console.log(newDate.getDay());    //output=> 3


newDate.toLocaleString('default', {
    weekday: "long"
})