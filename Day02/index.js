// Variable ko kaise banate hai

// let name = "Mohan";
// let age = 20;

// if(true){
//   let c = 90;  
// }

// age = 30;
//  console.log(c);
// console.log(name , age);


// const account = 1234;
// // account = 23;
// console.log(account);


// Old Tarika
// var a = 10;
// var a = 20;

// if(true){
//     var a = 20;
// }

// function fun(){
//     var c = 20;
// }

// var b = 30;
// console.log(c);

// Data types

// PRIMITIVE data types

// number,string,boolean,undefined,null,bigint,symbol

// NUMBER
// let a = 10;
// let b = 2.36;
// console.log(a,b);
// console.log(typeof(b));


// STRING

// let c = "Beginning Of Js";
// let d = 'Tamanna';
// let e = `Mohammed`;
// console.log(typeof e);
// console.log(c,d);


// BOOLEAN

// let login = true;
// let f = false;
// console.log(typeof login);
// console.log(login, f);


// UNDEFINED

// let user;
// console.log(typeof user);
// const p; --"const" cannot just be declared we must Initialize it 
// console.log(typeof let);
// console.log(typeof undefined);
// console.log(typeof user);
// console.log(user);


// BIGINT
// let num = 2321637826783213461; --precisionloss
// console.log(typeof num);
// console.log(num);

// let num = 2321637826783213461n;
// console.log(typeof num);
// console.log(num); 


// NULL
//  let weather = null;
//  console.log(typeof weather);

//  let weather = current_weather("Bangalore");
//  console.log(weather);



// SYMBOL

// const id1 = Symbol("id");
//  const id2 = Symbol("id");
//  console.log(typeof id1);
//  console.log(id2==id1);



//  NON PRIMITIVE Data Type
// Array,object,functions


// ARRAY
//  let arr = [10,20,11,"Rohit",true];
// console.log(typeof arr);
// console.log(arr);

 
// OBJECT
// let user = {
//     name : "Rohit",
//     account:12312,
//     age:18,
//     category:'gen'
// }

// console.log(typeof user);
// console.log(user);


// FUNCTION
// let s = function add(){
//   console.log("Hello World");

// }

//  console.log(typeof s);
// console.log(s);


// PRIMITIVE DATA Type Are IMMUTABLE

// let a = 10;
// let b= a;

// b = 20; //ek copy mein change karenge toh doosre copy mein changes affect nhi honge
// console.log(a,b); 

// let str = "Rohit";
// str = "Mohan";

// console.log(str);


// NON PRIMITIVE DATA TYPE ARE MUTABLE

// let arr = [10,20,30,40];

// arr.push(90);
// arr[0] = 70;
// console.log(arr);

let obj={
    name:"Mohan",
    age:20
}

let obj2 = obj;

obj2.name="Rohan";
console.log(obj); //ek copy mein change karenge toh doosre copy mein changes affect honge
    
