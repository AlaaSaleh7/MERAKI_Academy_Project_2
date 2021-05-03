// selector the tag in html
const body=document.querySelector("body");
const theInput = document.querySelector(".add-task input");
const addButton= document.querySelector(".add-task .add");
const tasksContainer=document.querySelector(".todo-container");
const noTaskMsg = document.querySelector(".no-tasks-message");
const tasksCount = document.querySelector(".tasks-count span");
const tasksCompleted = document.querySelector(".tasks-completed span");
const taskContent = document.querySelector(".tasks-content");
const taskCom = document.querySelector(".tasks-completed");
const taskCon = document.querySelector(".tasks-count");

// trying local storage 
//myStorage = window.localStorage;
//localStorage.setItem('theInput', 'theInput.value');

// function focus input 
window.onload=()=>{
     theInput.focus();
     numberTasks();
 };

 // modify array to save the values
 let arr = [];

 // write a function when user click the add button 
 addButton.onclick = ()=>{
// if the user click the button add without write a task output massage 
 if(theInput.value===''){
 noTaskMsg.innerHTML = 'Please Add Your Task !';

 // if not add the task to Array 
 }else{
     noTaskMsg.remove(); 
    arr.push(theInput.value);
 // view the tasks
    showList(arr);
 }
 };

//creat a function to output the tasks and with completed and delete click with each task.
 showList = (x)=>{
    noTaskMsg.remove(); 
    taskContent.innerHTML="";
    for(let i = 0; i < x.length;i++){
       //creat div task-box and spans delete, completed 
        let mainDiv = document.createElement("div");

        let deleteElement= document.createElement("span");

        let completedElement = document.createElement("span");
        // modify text = value of array.
        let text=document.createTextNode(x[i]);
        // the words delete and completed in task-box
        let textDelete=document.createTextNode("delete");
        
        let textComp=document.createTextNode("completed");
        // give the text delete id = i to be unique and dynamic
        textDelete.id = i;
        // append text =x[i] to div task-box
        mainDiv.appendChild(text);
        // modify mainDiv of the name task-box 
        mainDiv.className="task-box";
        // append the  text delete and completed to the spans
        deleteElement.appendChild(textDelete);

        completedElement.appendChild(textComp);
        // modify spans id dynamic
        deleteElement.id=`delete${i}`;

        completedElement.id=`completed${i}`;
        //add the delete and completed words to be list
        deleteElement.classList.add("delete"); 

        completedElement.classList.add("completed");
        // event click on the delete and completed
        deleteElement.addEventListener('click',deleteTask);

        completedElement.addEventListener('click',completedTask);
        //put the spans delete and completed in mainDiv
        mainDiv.appendChild(deleteElement);

        mainDiv.appendChild(completedElement);
      //put the mainDive "task-box" in Div"taskContent"
        taskContent.appendChild(mainDiv);
      // empty the input
        theInput.value ='';
      //focus the input again to input anther task
        theInput.focus();
      // change the number of tasks when the user add anther one
        numberTasks();
     }
    
 };

 let count = 0
 function deleteTask(e) {
   // console.log(e.target);
    let d = e.target.id;

    let a = d.replace('delete','');

    e.target.parentElement.style.display = 'none';   

    arr.splice(a,1);

    numberTasks();

    if(count > 0) count--;

    document.getElementById('count').textContent = count;

    completedTask();

 };
 let myArray = [];

 function completedTask(e) {
    
    let d = e.target.id;
    //console.log(e.target);
    let a = d.replace('completed','');
   // console.log("arr",arr);
    //console.log("sp",arr[a])
    //const itemToPush = arr[a]
    myArray.push(arr[a]);
    e.target.parentElement.style.display = 'none'; 

    count++;

    document.getElementById('count').textContent = count;

    arr.splice(a,1);


    console.log(myArray);
 };

 // give the numbers of the tasks by length of array.
 const numberTasks=()=>{
        tasksCount.innerHTML= arr.length;
};


taskCom.onclick=()=>{
   showList(myArray);
}

taskCon.onclick=()=>{
   showList(arr);
}
//completedTask2 = ()=>{
   // myArray array of completed
   // the value of myArray in span
   // append the spans to div completed
   // show it in a div when click on completed
   // hidden the all tasks
  // myArray.forEach(function(element){
     // spanElement=document.createElement("span");
     // let arrayCompleted= document.createElement("div");
     // arrayCompleted.appendChild(spanElement);
      //(".tasks-completed").onclick(completedTask2)
      //document.querySelector(arrayCompleted).show
      //document.querySelector(tasksCount).hidden
      
  // })



//}



//allTasksButton.onclick = ()=>{

//}


// Trying with jQuary//


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
    

