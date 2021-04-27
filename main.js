const input =document.querySelector(".add-task");
const addBtn = document.querySelector(".add-task .add");
const taskContent =document.querySelector(".task-content");

window.onload =()=>{
    input.focus();
};

addBtn.onclick =()=>{

    if(input.value ===''){

        console.log("No value");
    } else{
       let span = document.createElement("span");
       let deleteBtn =  document.createElement("span");

       let text = document.createTextNode(input.value);

       let deleteText = document.createTextNode("Delete");

       span.appendChild(text);

       span.className='task-box';

       deleteBtn.appendChild(deleteText);

       deleteBtn.className='delete'

       span.appendChild(deleteBtn)

       taskContent.appendChild(span);
    }
};