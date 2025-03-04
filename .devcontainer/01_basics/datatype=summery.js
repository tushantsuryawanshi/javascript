//# Primitive

// 7 types : String , numbers,boolean,null,undefined,symbol,BigInt,

const score =100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);
//const bigNumber = 233423742547234n

// Referance(non Primitive)

// Array,object,function


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"Tushant",
    age:22

}
const myFunction = function (){
    console.log("Hello World ");
    
}
console.log(typeof bigNumber);
// https://262.ecma-interntional.org/5.1/#sec-11.4.3






// ***********************************

 // Stack (Primitive), Heap(non-Primitive)

 let myYoutubename ="TushantSuryawanshi"

 let anothername ="myYoutubename"
 anothername = "chairaurcode"

console.log(myYoutubename);
 console.log(anothername);

let user1 ={
    email: "user23@gmail.com",
    upi:"1121@paytm"
}
let user2 = user1
user2.email =" tushant29@gmail.com"

console.log(user1.email);
console.log(user2.email );
