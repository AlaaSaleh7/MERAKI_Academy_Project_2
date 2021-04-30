const body=document.querySelector("body");
const theInput = document.querySelector(".add-task input");
const addButton= document.querySelector(".add-task .add");
const tasksContainer=document.querySelector(".todo-container");
const noTaskMsg = document.querySelector(".no-tasks-message");
const tasksCount = document.querySelector(".tasks-count span");
const tasksCompleted = document.querySelector(".tasks-completed span");
const taskContent = document.querySelector(".tasks-content");


window.onload=function(){
    theInput.focus();
    numberTasks();
};

let arr = [];

addButton.onclick = function(){
if(theInput.value===''){
noTaskMsg.innerHTML = 'Please Add Your Task !';



}else{
    noTaskMsg.remove(); 
    arr.push(theInput.value);
    showList(arr);
}
};

showList = (x)=>{
    noTaskMsg.remove(); 
    taskContent.innerHTML="";
    for(let i = 0; i < x.length;i++){
        let mainSpan = document.createElement("span");

        let deleteElement= document.createElement("span");
    
        let text=document.createTextNode(x[i]);
    
        let textDelete=document.createTextNode("delete");
        
        textDelete.id = i;

        mainSpan.appendChild(text);
        
        mainSpan.className="task-box";
    
        deleteElement.appendChild(textDelete);
    
        deleteElement.id=`delete${i}`;

        deleteElement.classList.add("delete"); 

        deleteElement.addEventListener('click',deleteTask);

        mainSpan.appendChild(deleteElement);
    
        taskContent.appendChild(mainSpan);

        theInput.value ='';
    
        theInput.focus();
    
        numberTasks();
    }
    
};

function deleteTask(e) {
    let d = e.target.id;

    let a = d.replace('delete','');

    e.target.parentElement.style.display = 'none';   

    arr.splice(a,1);

    numberTasks();

};

function numberTasks(){
    tasksCount.innerHTML= arr.length;

 //tasksCompleted.innerHTML=.length;
};
