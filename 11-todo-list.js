const todoList = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const duedate = todoObject.duedate;
    const{name, duedate}=todoObject;
    const html = `
      <div>${name}</div>
      <div>${duedate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  }
  console.log(todoListHTML); 
  

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const duedate = dateInputElement.value;

  todoList.push({
    // name:name, 
    // duedate:duedate
    name,
    duedate
  });
  console.log(todoList);
  inputElement.value = '';

  renderTodoList();

}