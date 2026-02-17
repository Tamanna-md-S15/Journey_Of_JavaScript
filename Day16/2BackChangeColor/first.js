//As learnt in previous class Where we needed that Event on every child ,But instead of using loop or Sing child by child eventListener to add we learnt something delegation(bubbling ke wajah se ho raha hai andar se bahar bubble hote jaa raha hai) and also..
// About e boject which will show us in console ke kaunsa child affected at present etc
//here as we will add Eventlistener on parent thats the reason we selected parent here...
const parent = document.getElementById('parent'); 

parent.addEventListener('click',(e)=>{
    // console.log(e.target); //parent ke andar kisi ke oopar bhi click kiya toh uski value hume e.target se milsakti hai
    const child = e.target; //e.target se parent ke andar kisi ke oopar bhi click kiya toh uski value miljayegi and vo value we will keep in child variable

    //body ke background ko change karna hai na isiliye select it
    const body = document.querySelector('body');

    //kya change karna hai ?-- its background color of body Aur Kya karna hai color kaise pata chalega Ke konsa Color rhakna hai?
    // its in right side--That is we kept (child.id)--jisme We gave id as color...
    //!!e.target se the child's value which we got usi child ki id We kept in backround
    body.style.backgroundColor = child.id;
})