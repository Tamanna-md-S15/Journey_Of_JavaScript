// Zomato Application's features

const orderDetail = {
    orderId: 1234,
    food:["pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "KR Puram",
    restaurant_location: "Bengaluru"
}


function placeOrder(orderDetail, Callback){ 
    console.log(`${orderDetail.cost}Payment is in Progress`);
     
     
    setTimeout(()=>{
      console.log("Payment is recieved and order gots placed");
      orderDetail.status = true;
      Callback(orderDetail); //Callback(orderDeatail) callback ko hum kaise bula rahe hai ? its taking an arguement
} ,3000)
}


// const Callback = (orderDeatail)=>{
//     preparingFood(orderDeatail); //callback toh accept kar raha hai one arguement toh ab hume preparingFood waale ko bhi orderDeatail deni hongi na..isiliye we pass it there too
// }


function preparingFood(orderDeatail,Callback){
    console.log(`Your food preparation has Started of ${orderDetail.food}`);
    
    setTimeout(()=>{
        console.log("your order is now prepared");
        orderDetail.token = 123;
        Callback(orderDetail);
    },3000)
}

function pickupOrder(orderDeatail,Callback){
    console.log(`Delivery guy is on the way to pickup order from ${orderDetail.restaurant_location}`);

    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.recieved = true;
        Callback(orderDetail);
    },5000);
}

function deliverOrder(orderDeatail){
    console.log(`I am on my way to deliver order at ${orderDeatail.customer_location} `);

    setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDeatail.delivery = true;
    },5000)
}


// placeOrder(orderDetail,()=>{
//     preparingFood();
      
// });

// const Callback = (orderDeatail)=>{
//     preparingFood(orderDeatail); //callback toh accept kar raha hai one arguement toh ab hume preparingFood waale ko bhi orderDeatail deni hongi na..isiliye we pass it there too
// }
// Above jo ho raha hai uske wajah se Callback hell ka syntax bhi thoda complex ho jayega!!


placeOrder(orderDetail, (orderDeatail)=>{
    preparingFood(orderDetail, (orderDeatail)=>{
      pickupOrder(orderDetail,(orderDeatail)=>{
        deliverOrder(orderDeatail);
      });  
    });
});