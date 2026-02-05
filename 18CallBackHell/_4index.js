function placeOrder(Callback){ 
    console.log("Payment is in Progress");
     
     
    setTimeout(()=>{
      console.log("Payment is recieved and order gots placed");
 
      Callback();
} ,3000)
}

function preparingFood(Callback){
    console.log("Your food preparation has Started");
    
    setTimeout(()=>{
        console.log("your order is now prepared");
        Callback();
    },3000)
}

function pickupOrder(Callback){
    console.log("Delivery guy is on the way to pickup order");

    setTimeout(()=>{
        console.log("I have picked up the order");
        Callback();
    },5000);
}

function deliverOrder(){
    console.log("I am on my way to deliver order");

    setTimeout(()=>{
        console.log("Order delivered succesfully");
    },5000)
}



placeOrder(()=>{
    preparingFood(()=>{
      pickupOrder(()=>{
        deliverOrder();
      });  
    });
});

// ## Yahi jo above written is call back hell hai!!
// Ye toh bus thode hai but iske baad agar if i send notification then feedback etc
// Aisa hi hua toh Aur zyadaa Callback hell 