console.log("Hello World Start");


//code
// ye line mein hum fetch karenge vo hum logoko ek promise return karke dega jo INITIAlly pending state mein hoga
// so initially yahi par we didn't read it
const p1 = fetch("https://api.github.com/users"); 


//2 here we read it bcoz 
//p1.then Will give data after reject or fulfillment of promise
//3 response .json kiya so that recieved data jo previously was in byte---usko hum Javascript object mein convert karenge 
// with help of json
//4 Convert hona bhi is An ASYNCHRONOUS task aur p1 will return a promise jo initially pending state mein hai and It will return that Info to p2 and fir ab Our promise 
// is in one of the 2 states that is fulfilled or reject toh now we will read p2.

//fulfilled / reject
const p2 = p1.then((response)=>{
   return response.json();
})

//5 ab p2 bhi promise hi hai toh we r reading it by p2.then jo bhi data hai in response
// and printing it.
p2.then((response)=>{
    console.log(response);
})

//actually we dont write step 2 se 5 so long instead promise ke chaining kar sakte hai!!!

console.log("Hello World END"); 
