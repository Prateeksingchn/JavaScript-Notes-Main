function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(username)                   //agar isse ese hi likh denge toh username ki value nahi aayegi console mein
    SetUsername.call(this, username)          //isliye we have to use call and this | "call" se we call the username | "this" so we call the required username

    /* `SetUsername.call(this, username)`:
        It's like calling the SetUsername function and saying, "Hey, when you do your job of setting the username, 
        do it for this particular user (represented by this), and here's the username."

        `this.username = username`:
        Now, you're just setting the username for the specific user (represented by this). It's like saying, 
        "Okay, now that SetUsername has done its thing, let's make sure this user's username is set to the one we provided."

        So, call helps the SetUsername function understand which user it's dealing with (this), 
        and then you use that understanding to set the username for that specific user. */
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);