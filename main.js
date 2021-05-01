// const body=$("body");
// const header=$("<header>TODO</header>");
// body.append(header);
// const span = $("<span>List</span>");
// header.append(span);
// const img = $("<img src='./to do list.png' alt='' style='width: 60px;'>");
// header.append(img);
// const tasksContainer=$("<div class='todo-container'></div>");
// body.append(tasksContainer);
// const add =$("<div class='add-task'></div>");
// tasksContainer.append(add);
// const theInput =$("<input type='text' placeholder='what Do You Want to Do..'>");
// add.append(theInput);
// const addButton=$("<button class='add'>+</button>");
// add.append(addButton);
// const noTaskMsg= $("<span class='no-tasks-message' id='no-tasks'>No Tasks To Show..!</span>");
// tasksContainer.append(noTaskMsg);
// const taskContent =$("<div class='tasks-content'></div>");
// tasksContainer.append(taskContent);
// const taskStats = $("<div class='task-stats'></div>");
// tasksContainer.append(taskStats);
// const tasksCount = $("<div class='tasks-count'>All Tasks</div>");
// taskStats.append(tasksCount);
// const allTask=$("<span>0</span>");
// tasksCount.append(allTask);
// const tasksCompleted =$("<div class='tasks-completed'>Completed</div>");
// taskStats.append(tasksCompleted);
// const completedNum = $("<span>0</span>");
// tasksCompleted.append(completedNum);

// window.onload=function(){
// theInput.focus();
//      numberTasks();
//  };

//  let arr = [];

//  addButton.on("click",()=>{
//  if(theInput.val('')){
//  noTaskMsg.html('Please Add Your Task !');
 
//   }else{
//       noTaskMsg.remove(); 
//       arr.push(theInput.val);
//       showList(arr);
//   }
//   });

//   showList = (x)=>{
//          noTaskMsg.remove(); 
//          taskContent.html="";
//          for(let i = 0; i < x.length;i++){
//              let mainSpan = $("<span class='task-box'></span>");
//              taskContent.append(mainSpan);
    
//              let deleteElement=$("<span class='delete'>Delete</span>");
//              mainSpan.append(deleteElement);

//              let text=document.text(x[i]);
        
//              //let textDelete=document.createTextNode("delete");
            
//              textDelete.id = i;
    
//              mainSpan.append(text);
            
//              mainSpan.className="task-box";
        
//              deleteElement.appendChild(textDelete);
        
//              deleteElement.id=`delete${i}`;
    
//              deleteElement.classList.add("delete"); 
    
//              deleteElement.addEventListener('click',deleteTask);
    
//              mainSpan.appendChild(deleteElement);
        
//              taskContent.appendChild(mainSpan);
    
//              theInput.value ='';
        
//              theInput.focus();
        
//              numberTasks();
//          }
        
//      };
    

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

         let completedElement = document.createElement("span");
    
        let text=document.createTextNode(x[i]);
    
         let textDelete=document.createTextNode("delete");
        
         let textComp=document.createTextNode("completed");

        textDelete.id = i;

         mainSpan.appendChild(text);
        
        mainSpan.className="task-box";
    
        deleteElement.appendChild(textDelete);

        completedElement.appendChild(textComp);

        deleteElement.id=`delete${i}`;

        completedElement.id=`completed${i}`;

         deleteElement.classList.add("delete"); 

        completedElement.classList.add("completed");

         deleteElement.addEventListener('click',deleteTask);

          deleteElement.addEventListener('click',completedTask);

         mainSpan.appendChild(deleteElement);

        mainSpan.appendChild(completedElement);

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

 function completedTask(e) {
    let d = e.target.id;

    let a = d.replace('completed','');

    e.target.parentElement.style.display = 'none';   

    arr.splice(a,1);

   numberTasks();

};

 function numberTasks(){
    tasksCount.innerHTML= arr.length;

  //tasksCompleted.innerHTML=.length;
};
