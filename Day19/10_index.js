// Zomato Application's features
//with help of Promise  instead  of call back hell

const orderDetail = {
    orderId: 1234,
    food:["pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "KR Puram",
    restaurant_location: "Bengaluru"
}


function placeOrder(orderDetail){ 
    console.log(`${orderDetail.cost}Payment is in Progress`);
     
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Payment is recieved and order got placed");
      orderDetail.status = true;
      resolve(orderDetail);//why this line
      
      } ,3000)
     })
    
}


function preparingFood(orderDeatail){
    console.log(`Your food preparation has Started of ${orderDetail.food}`);
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDeatail);
       
    },3000)
    })
   
}

function pickupOrder(orderDeatail){
    console.log(`Delivery guy is on the way to pickup order from ${orderDetail.restaurant_location}`);
    
    return new Promise((resolve, reject) => {
          setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.recieved = true;
        resolve(orderDeatail);
       
    },5000);
    })
  
}

function deliverOrder(orderDeatail){
    console.log(`I am on my way to deliver order at ${orderDeatail.customer_location} `);
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDeatail.delivery = true;
        resolve(orderDeatail);
    },5000) 
     })
   
}


//Iss code ne readability ko Bohot kharab kar diya 

// placeOrder(orderDetail, (orderDeatail)=>{
//     preparingFood(orderDetail, (orderDeatail)=>{
//       pickupOrder(orderDetail,(orderDeatail)=>{
//         deliverOrder(orderDeatail);
//       });  
//     });
// });


//  placeOrder(orderDetail);
//  preparingFood(orderDetail);
//  pickupOrder(orderDetail);
//  deliverOrder(orderDetail);

 //Iss tarah Call Karne Ki Koshish Karenge Toh saare ek hi time call hojayenge...
 //Magar humara Maksad ye hai ke pehle wwala call ho vo hume kuch return karke de aur fir Hum next waale ko bulaye


 //usko we can solve Aise ke Ye Humara  placeOrder() ek promise Return kare toh hum fir .then karke uske baad hum 
 // preparingFood(orderDetail) isko call karsakte hai
//  will see this below


 placeOrder(orderDetail)
 .then((orderDetail)=>preparingFood(orderDetail))
 .then((orderDetail)=> pickupOrder(orderDetail))
 .then((orderDetail)=>deliverOrder(orderDetail))
 .then((orderDetail)=>{
    console.log(orderDetail);
})

//next file lets handle promise


 