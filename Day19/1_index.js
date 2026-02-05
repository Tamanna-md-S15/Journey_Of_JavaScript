console.log("Hello World Start");




const p1 = fetch("https://api.github.com/users");
//Jo ye step hai is it synchronous or asynchronous?
//FLOW: iss link(client ) se hum github ke server par jaayenge request for 30 users data and then fetch so that vo humare system mein aapayenge
// kya humara js will wait her?? NO so it will not wait instead usko pata chalega ke yaha fetch karne ke laane mein time lagega..so it will handover to API
// so isiliye us line mein it says p1 ne ek request ki hai jo "Pending Request hai" (i.e ye jo promise hai its pending)

console.log(p1); //Pending State mein hai yahi par hum usko print karwa rahe hai which we Shouldn't




console.log("Hello World END");