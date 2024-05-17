// console.log(2 > 1);   // output => true
// console.log(2 >= 1);  // output => true
// console.log(2 < 1);   // output => false
// console.log(2 == 1);  // output => false
// console.log(2 != 1);  // output => true   ( ! this sign is use for not equal  )

// <in sab mein koi dikkat nahi hai, cozz dono 2 and 1 both are string

// *********************************************************************************************************************************************************

// console.log("2" > 1);
// console.log("02" > 1);

// yaha pe dikkat a sakti hai, cozzzz ek string hai and ek number hai(datatypes change hote hi problem hai)

// *********************************************************************************************************************************************************
// most of the times we avoid these types of comparisons-->

// console.log(null > 0);  // output => false
// console.log(null == 0); // output => false
// console.log(null >= 0); // output => true

// console.log(undefined == 0);  // output => false
// console.log(undefined > 0); // output => false
// console.log(undefined < 0); // output => false

// *******************************************************************************************************************************************************************

// ===
// console.log("2" === 2);  //output => false 
/*  (agar === hai toh vo conversion nahi karta,check krta hai ki koi strings/boolean ya kuch aur toh nahi)   */


// console.log("2" == 2);  //output => true 
/*     (and agar == ye hai toh vo direct values leke compare karta hai, conversion karke)     */
