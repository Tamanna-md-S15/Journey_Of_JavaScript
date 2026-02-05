//Zomato Application


//payment start hui
function placeOrder(){
    console.log("Payment is in Progress");//progress mein hai payment
     
     //3 sec ke baad Hogayi payment we dispalyed as done after 3sec
   
    setTimeout(()=>{
      console.log("Payment is recieved and order get  placed");
} ,3000)
}


//2nd Step ke place order after this 
// placeOrder();


//Iske Baad Ab I have to notify Restaurant  ke ye ye payment ho chuka hai So Ab Preparation start kardo kehkar

// Next Function is
function preparingFood(){
    console.log("Your food preparation has Started");

    setTimeout(()=>{
        console.log("your order is now prepared");
    },3000)
}

 placeOrder();
// //?? Question ye hai ki kya hume preparingOrder ko placeOrder ke baad hi rakhna chahiye??
// //Dekte hai kya hota hai..
 preparingFood();

// AISA KARNE KE BAAD JO OUTPUT recieved hai:
//Payment is in Progress
//Your food preparation has Started
// Ye don ek time hi output mein milgaye... JO Ke sahi nahi hai that payment progress mein hi hai And Food preparation started

//Hum ye chah rahe hai na Ke pehla placeOrder() ye function execute ho jaaye and fir next preparingFood() call ho hai naa..
//Aisa hua nahi kyuki its bcoz of nature of js...
//jisme It went to placeOrder(); console wali line dekhi execute kiya fir usme setTimeout for 3sec laga tha to usko Web Api ke hawale kar diya Aur khud next function mein i.e
//preparingFood(); isme chalagaya ...Dekha same is happening like it was in previous toh Isme setTimeout dekha toh first waale mein time waali line hochuki thi ready toh usko
//later execute kiya and fir second function ke setTimeout waale ko execute kiya.



