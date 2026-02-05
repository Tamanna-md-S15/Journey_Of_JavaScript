console.log("Hello World Start");

//code
fetch("https://api.github.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    // console.log(data);
    for(let i=0;i<data.length;i++){
    const parent = document.getElementById("first");
const image = document.createElement('img');
image.src = data[i].avatar_url;
image.style.height = "50px";
image.style.width = "50px";

parent.append(image);
 }

})



console.log("Hello World End");