class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }


// 'getter' and 'setter' property dono ko saath mein use karna padta hai, warna work nahi karti
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value                //yaha pe  _email | _password isliye use kiya hai kyuki, agar nahi karege toh, systumm confuse hoga 
        //                                   ki phele kya karna hai, race lag jatu hai phele ye karo, phele ye karo, 'ERROR'.
    }

    get password(){
        return `${this._password}prateek`
    }

    set password(value){
        this._password = value
    }
}

const prateek = new User("h@prateek.ai", "abc")
console.log(prateek.email);