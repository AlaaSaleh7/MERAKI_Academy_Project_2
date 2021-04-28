const body=document.querySelector("body");
const theInput = document.querySelector(".add-task input");
const addButton= document.querySelector(".add-task .add");
const tasksContainer=document.querySelector(".todo-container");
const noTaskMsg = document.querySelector(".no-tasks-message");
const tasksCount = document.querySelector(".tasks-count span");
const tasksCompleted = document.querySelector(".tasks-completed span");

window.onload=function(){
    theInput.focus();
};

addButton.onclick = function(){
if(theInput.value===''){

    console.log('No value');
}else{
    noTaskMsg.remove(); 

    let mainSpan = document.createElement("span");

    let deleteElement= document.createElement("span");

    let text=document.createTextNode(theInput.value);

    let textDelete=document.createTextNode("delete");

    mainSpan.appendChild(text);
    
    mainSpan.className="task-box";

    deleteElement.appendChild(textDelete);

    deleteElement.className="delete";

    mainSpan.appendChild(deleteElement);

    tasksContainer.appendChild(mainSpan);

    theInput.value ='';

    theInput.focus();
}
};