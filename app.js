// GLOBAL
const inputTask = document.querySelector('.input-task');
const addTask = document.querySelector('.button-primary');
const filterTask = document.querySelector('.filter-task');
const deleteTask = document.querySelector('.button');
const theForm = document.querySelector('form');
const itemList = document.querySelector('.itemList');

// Add event Listeners
loadEventListeners();

function loadEventListeners(){
  // add task event
theForm.addEventListener('submit', newTask);
  // remove task event
itemList.addEventListener('click', remTask);
  // delete all tasks
deleteTask.addEventListener('click', delTask)
  // filter tasks
filterTask.addEventListener('keyup', filTask)
}

// Creating the task
function newTask(e) {
  if(inputTask.value === '') {
    alert('Add a task');
} else {
// li
const li = document.createElement('li');
// li classs
li.className = 'items';
// create text Node
li.appendChild(document.createTextNode(inputTask.value));
// create link
const link = document.createElement('a');
// link class
link.className = 'delete-task';
//
link.appendChild(document.createTextNode('x'));
// append link to li
li.appendChild(link);
itemList.appendChild(li);
inputTask.value = '';

e.preventDefault();
}}


// Deleting the tasks
function remTask(e){
  if(e.target.classList.contains('delete-task')){
    if(confirm('Are You Sure ?')){
    e.target.parentElement.remove();
    console.log('works');
  }
  }
}

// remove all tasks
function delTask(){
//  itemList.innerHTML = '';
// works much faster
while (itemList.firstChild) {
  itemList.removeChild(itemList.firstChild);
}
}

// Filter tasks
function filTask(e){
const filterInp = e.target.value.toLowerCase();

  document.querySelectorAll('.items').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(filterInp) != -1){
      task.style.display = 'block';
    }
      else {
        task.style.display = 'none';
      }
    })
}
