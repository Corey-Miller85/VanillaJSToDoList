const form = document.querySelector('#task-form')
const ul = document.querySelector('.collection');
const input = document.querySelector('#task');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');

loadEventListeners();

function loadEventListeners() {
  //add task event
  form.addEventListener('submit', addTask);
  // remove task
  ul.addEventListener('click', removeTask);
  // clear task list
  clearBtn.addEventListener('click', clearTasks)  
  // Filter List
  filter.addEventListener('keyup', filterList);
}

function addTask(e) {
  e.preventDefault();
  if (input.value === "") {
    alert('Add a task.')
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    li.className = 'collection-item';
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = "<i class =\"fa fa-remove\"></i>"
    li.appendChild(link);
    ul.appendChild(li);
    
    //clear input on submit
    input.value = ""
  }
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure you want to do that?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}


// Clear Task List

function clearTasks() {
  while (ul.firstChild) {
   ul.removeChild(ul.firstChild)
  }
}

//filter List
function filterList(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else { 
      task.style.display = 'none';
    }
  })
}