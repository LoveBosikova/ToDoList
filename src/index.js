// Get element we need to manipulate
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Creating task
function addTask(){
    if (inputBox.value === '') {
        alert('You shoult write something');
    }
    else {
        let li = document.createElement('li');
        li.className = 'todo-app__list-item';
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        //Create a cross to delete a task
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        span.className = 'todo-app__cross';
        li.appendChild(span);
    }

    // Clean the input after adding a task
    inputBox.value = '';
    saveData();
};

// Function to cross done task or delete it at all
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// function to save all tasks and their status
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
};

// function to show all tasks and it status if page reloaded 
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();