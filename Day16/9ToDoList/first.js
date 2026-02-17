const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('input');


form.addEventListener('submit',(e)=>{
    e.preventDefault(); //

    const text = input.value.trim();

    if(text==""){
        return;
    }

    const parent= document.createElement('div');
    parent.style.marginTop = "20px"
    parent.style.marginBottom = "10px"
    

    const task = document.createElement('span');
    task.textContent = text;

    task.style.marginRight = "30px";
    task.style.marginLeft="10px"
   

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.style.width = "50px";
    deleteButton.style.backgroundColor = "red"


    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";
    doneButton.style.width = "50px";
    doneButton.style.marginRight = "30px"
    doneButton.style.backgroundColor = "green"

    parent.append(task,doneButton,deleteButton);
    allTask.append(parent);
    
    deleteButton.addEventListener('click',()=>{
        parent.remove();
    })
    
    doneButton.addEventListener('click',()=>{
        task.style.textDecoration = 'line-through';
        task.style.color = 'grey';
    })
    
    form.reset(); //input value after adding waha se nikkal jaayegi!!

})