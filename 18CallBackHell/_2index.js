//JS Ne apna kaam khoob nibhaya peechle _1index.js file .. magar Humara Lakshya kuch aur tha ...Isiliye Now to make some Changes..


function placeOrder(Callback){ //Callback ko recieve karlete hai jo Callback neeche as 1st step diya tha
    console.log("Payment is in Progress");
     
     
    setTimeout(()=>{
      console.log("Payment is recieved and order get  placed");
      //iske baad CallBack karlete hai yaha
      Callback();
} ,3000)
}

function preparingFood(){
    console.log("Your food preparation has Started");

    setTimeout(()=>{
        console.log("your order is now prepared");
    },3000)
}

placeOrder(preparingFood); //1)..preparingFood() ko as a call back placeOrder() ko de sakte hai..
//Ab output acc to our expectation 
// Payment is in Progress 
// (after 3 sec)Payment is recieved and order get  placed
// Your food preparation has Started
// (after 3 sec )your order is now prepared