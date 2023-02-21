// 1: let and const

// let a= 5;
// var b= 6;
// let a=4;
// var b=6;
// now you can see that we can not declear same variable as let.



// 2: arro functions

// before ES6 we use normal functions:

// function user(){
// console.log("saleem raza")
// }

// user();

// // with arrow function

// function user1() {
//     console.log("saleem raza");
// }

// user1();



// 3: Export and Imports modules:

// importing the modules.js file to use the code


// import  contact from "./modules.js";
// import { contact1 as b } from "./modules.js";                                                                                                                


// contact();
// b();


// 3: class and objects:

// alway constactors() and method() use in inside of class
// alway use this. if you are giving any variable inside the class

class Owner{
    constructor(n){
        this.name=n;


    }

    // creating method:
    seller(){
        console.log(this.name)
    }
}
 
// let owner1= new Owner("saleem");
// console.log(owner1);
// owner1.seller();

// now understanding inheritance
// making another class and inherate with parent Owner class

class seller extends Owner{
    customer(){
        console.log("ali")
    }
}

let seller1= new seller("saleem");
console.log(seller1);
seller1.seller();
seller1.customer();


// 4: spread and rest operators:

// first understand spread operator;
// sperad operator just split our array object and you can use in another arry 

let arr1= ["saleem", 88, 80, "muhammd", null , undefined]
let arr2=[...arr1,"muhm"];
console.log(arr2);

// same as use for object :
// example:

let obj={
    name: "saleem",
    age: 88
}
let obj1={
...obj, address: "karachi"
}

console.log(obj1);


// rest operators:
// rest operator are use in function argument. if we have so many arguments in function so we use rest opeerators insted of indivsulay putting arguments.

let fun=(...arg)=>{
    console.log(arg[0])
}
fun(7,8,9);


// 5: Destructuring:

// array destructuring:

let car=["honda","toyota","passo"];
let [mode1,mode2, mode3]=car
console.log(mode3);

// object destructuring:

let nissan={
    model4: "x-trail",
    model5: "note",
    model6: "nv-200"
}

let {model4,model5,model6}=nissan;
console.log(model4)
