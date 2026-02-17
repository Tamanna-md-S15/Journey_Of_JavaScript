const div = document.querySelector('div');
setInterval(()=>{
    let time = new Date() // isse hum time nikaal sakte hai jo we want 
    div.textContent = time.toLocaleTimeString();
},1000)