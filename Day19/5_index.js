console.log("Hello World Start");

//code
fetch("https://api.github.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
   console.log(data);
    
})



console.log("Hello World End");