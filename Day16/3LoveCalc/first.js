const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
     e.preventDefault();
    //we r selecting boy and girl,s names here... BUT we need value present in that name...
    // toh name in form will be in key value pair so with respect to variable . lagakar select karlo value 
    const Boy = document.getElementById("Boy");
    const Girl = document.getElementById("Girl");
     
    //we selected the value yes BUT Hume toh calculate karke result dene ke liye toh length of value chahiye so written like this ok
    const L1 = Girl.value.length;
    const L2 = Boy.value.length;
    
    //Ye logic is to take length of their numbers add Fir ^3 karke jo number aayega usko %101 karna hai so that Previously milaa number hum between 1 to 100 laapaye!
    const result = Math.pow(L1+L2,3)%101;

    document.querySelector('h2').textContent = `Result: ${result}%`;
    form.reset();
    
})