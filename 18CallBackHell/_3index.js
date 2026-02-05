function placeOrder(Callback){ 
    console.log("Payment is in Progress");
     
     
    setTimeout(()=>{
      console.log("Payment is recieved and order got  placed");
 
      Callback();
} ,3000)
}

function preparingFood(Callback){
    console.log("Your food preparation has Started");
    // pickUpOrder(); // hard code aise karke kabhi nahi karna ...bcoz hum logo ko apne function ko 
    //reusable banana hai Bcoz ...jab kabhi Aap sirf preparingFood() waale lo call karo toh ye 
    // pickUpOrder() waala khud Bulwaya jaayega...Unnecessary Bcoz koi aisa restaurant hai ki jo food khud ke delivery partner se karwana chahta ho toh..

    setTimeout(()=>{
        console.log("your order is now prepared");
        Callback();
    },3000)
}

function pickupOrder(){
    console.log("Delivery guy is on way to pickup order");

    setTimeout(()=>{
        console.log("I have picked up the order");
    },5000);
}



// placeOrder(preparingFood);   
// placeOrder(preparingFood(pickupOrder));   // humare paas ek Callback function hai toh hum uske andar aur ek Callback Function ko as Arguement pass nahi kar sakte..

// placeOrder(()=>{
//     preparingFood();
// });

// || Meaning ISKA

// const Callback = ()=>{
//     prepareingOrder();
// } 

// Kya faida hua aisa Likhneka Ab Hum pickupOrder ko as Callback send kar sakte hai in preparingFood() waale mein

placeOrder(()=>{
    preparingFood(()=>{
      pickupOrder();  
    });
});

// || Meaning

// const Callback = ()=>{
//      pickupOrder();
//  } 
//  Callback();