console.log("Hello World Start");



const p1 = fetch("https://api.github.com/users");

p1.then((response)=>{
    console.log(response.json());
})

console.log("Hello World END"); 

// Hello World Start
// Hello World END
// Promise { <pending> }

// (response.json()) ==> likha hai hum logone fir bhi Output oopar jo hai vo aa raha hai Kyu??
// Aisa Kyu? Koi request bhi nahi maari hai phir bhi Promise { <pending> } Dikha raha hai
// ItS Bcoz (response.json()) task bhi Asynchronous task hota hai..Iske andar bhi kaafi zyada calculation hoti hai..
//  (response.json()) jab hum kar rahe hai tab promise ek wada kar raha hai ke in future mai fulfill ho kar bataunga ya 
//ya reject ho jaunga kehkar.. TOH ISILIYE aap mujhe un do state mein hi READ karne ki koshish karna Uske Pehle Pending Waale State 
// mein Dont read me ...
