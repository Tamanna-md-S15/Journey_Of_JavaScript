// Zomato Application's features
//with help of Promise  instead  of call back hell
// In This file lets handle promise

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

       if(Math.random()>0.1){  //yaha 0.1 se zyada ho kehkar random condition di hai bus magar real world mein acc to us constraints dena hai.  
         console.log("Payment is recieved and order got placed");
         orderDetail.status = true;
         resolve(orderDetail);//why this line
       }
       else{
         reject(orderDetail);
       }

      } ,3000)
     })
    
}


function preparingFood(orderDeatail){
    console.log(`Your food preparation has Started of ${orderDetail.food}`);
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(Math.random()>0.05){
                console.log("your order is now prepared");
                orderDetail.token = 123;
                resolve(orderDeatail);
            }
            else{
                reject("Food item  needed for preparation have fallen short at Restaurant so Sorry");
            }
        
       
    },3000)
    })
   
}

function pickupOrder(orderDeatail){
    console.log(`Delivery guy is on the way to pickup order from ${orderDetail.restaurant_location}`);
    
    return new Promise((resolve, reject) => {
          setTimeout(()=>{

            if(Math.random()>0.05){
                console.log("I have picked up the order");
                orderDetail.recieved = true;
                resolve(orderDeatail);
       
            }
            else{
                reject("Delivery boy unable to reach Restaurant");
            }
        
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


 placeOrder(orderDetail)
 .then((orderDetail)=>preparingFood(orderDetail))
 .then((orderDetail)=> pickupOrder(orderDetail))
 .then((orderDetail)=>deliverOrder(orderDetail))
 .then((orderDetail)=>{
    console.log(orderDetail);
})

.catch((error)=>{
    console.log("Error: ",error);
})
.finally(()=>{
    console.log("I am doing cleanup");
})




 