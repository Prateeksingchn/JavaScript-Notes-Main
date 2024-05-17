// const tinderUser = new Object()   // output=> {}  (empty object)  this is singleton object
const tinderUser = {}             // output=> {}  (empty object)  this is not singleton object\

tinderUser.id = "123abc"
tinderUser.name = "prateek"
tinderUser.isLoggedIn = false


// console.log(tinderUser);         //output=> { id: '123abc', name: 'prateek', isLoggedIn: false }

// -----------------------------------------------------------------------------------------------------------------
const regularUser = {
    email: "parteek@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prateek",
            lastname: "chouhan"
        }
    }
}

// console.log(regularUser.fullname);    //output=> { userfullname: { firstname: 'prateek', lastname: 'chouhan' } }
// console.log(regularUser.fullname.userfullname.firstname);    //output=> prateek


//How to merge or combine objects ---->
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// cost obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}         //output=> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } ,||| same mistake as arrays
// const obj4 = Object.assign({}, obj1, obj2, obj4)


const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
]
// users[1].email


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));      //output=> [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));    //output=> [ '123abc', 'prateek', false ]
// console.log(Object.entries(tinderUser));   //output=> [ [ 'id', '123abc' ], [ 'name', 'prateek' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser,hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js ki  study",
    price: "999",
    courseInstructor: "prateek"
}

// course.courseInstructor

const {courseInstructor :instructor} = course  // yaha pe :instructor, likh ke courseInstructor ki value change kardi, now wwe can call just by using instructor

// console.log(courseInstructor);     //we can call the function using both name
// console.log(instructor);           //we can call the function using both name    



//JSON ke types mein mil sakta hai--> (1)Object (2)Array


//-> Object
// {
//     "coursename": "js ki  study",
//     "price": "999",
//     "courseInstructor": "prateek"
// }


//-> Array
[
    {},
    {},
    {}
]