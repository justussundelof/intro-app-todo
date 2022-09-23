const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const deleteAllBtn = document.querySelector('.delete-all');
const errorSpan = document.querySelector('.error-span');

todoButton.addEventListener('click', addTodo);
deleteAllBtn.addEventListener('click', deleteAll);

function addTodo(event) {
  event.preventDefault();
  if (todoList.childElementCount === 5) {
    errorSpan.innerText = "Can't have more than 5 todos, get to work!";
    return;
  }
  if (!todoInput.value) {
    errorSpan.innerText = 'You must enter a value';
    return;
  }
  errorSpan.innerText = '';
  //Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //CREATE LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //DONE BUTTON
  const doneButton = document.createElement('button');
  doneButton.innerHTML = "<i class='fas fa-check'></i>";
  doneButton.classList.add('done-button');
  doneButton.addEventListener('click', deleteTodo);
  todoDiv.appendChild(doneButton);

  //DELETE BUTTON
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', deleteTodo);
  todoDiv.appendChild(deleteButton);

  //Append to list
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function deleteAll(e) {
  e.preventDefault();
  let length = todoList.children.length
  for (let i = 0; i < length; i++) {
    if(!todoList.lastChild) return
    todoList.lastChild.remove()
  }
}

function deleteTodo(e) {
  const item = e.target;

  if (
    item.classList[0] === 'delete-button' ||
    item.classList[0] === 'done-button'
  ) {
    const todo = item.parentElement;
    todo.remove();
  }
}
