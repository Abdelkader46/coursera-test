// --------------------main-----------
let notePage = document.getElementById("noteAction");
let tasksPage = document.getElementById("taskAction");

// notePage.onclick = function() {
//     location.href = "http://127.0.0.1:8887/index.html";
// }
// tasksPage.onclick = function() {
//         location.href = "http://127.0.0.1:8887/tasks.html";
//     }
// ---------------------------------------------Tasks-----------------
let writedTask = document.getElementById('task');
let createTask = document.getElementById('createTask');
let addedTask = document.getElementById('addedTask');
let editTask = document.getElementById('editTask');
let deleteTask = document.getElementById('deleteTask');

let taskArray;

if (localStorage.task != null) {
    taskArray = JSON.parse(localStorage.task);
} else {
    taskArray = [];
}




// createtask
function createNewTask() {
    if (writedTask.value != '') {
        let taskObject = {

            writedTask: writedTask.value,
        }
        taskArray.push(taskObject);
        localStorage.setItem('task', JSON.stringify(taskArray));

    }
    writedTask.value = '';
    setTaskOutput();
}

// show Tasks
function setTaskOutput() {
    let containTaskArray = '';
    for (let i = 0; i < taskArray.length; i++) {
        containTaskArray += `
        <div id="mainOut">
            <div id="output">
                 <div id="addedTask">${taskArray[i].writedTask}</div>
                 <div id="icons">
                       <button id="editTask" onclick="editTaskaction(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
                       <button id="deleteTask" onclick="deleteTaskaction(${i})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
         </div> `;
    }
    document.getElementById("mainOut").innerHTML = containTaskArray;

}
setTaskOutput()




function deleteTaskaction(i) {
    taskArray.splice(i, 1);
    localStorage.task = JSON.stringify(taskArray);

    setTaskOutput();
}


function editTaskaction(i) {
    writedTask.value = taskArray[i].writedTask;
    deleteTaskaction()
}