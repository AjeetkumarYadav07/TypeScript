import './style.css'

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const todoContainer = document.querySelector(".todoContainer") as HTMLDivElement;
const myform = document.getElementById("myform") as HTMLFormElement;

myform.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 10),
  };

  todos.push(todo);
  todoInput.value = "";

  console.log(todos);

  renderTodo(todos);
};


const generateTodo = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  // create a checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;

  checkBox.onchange = () =>{
    label.className = checkBox.checked? "textCut" : "" ;
  }

  // label with todo title
  const label: HTMLSpanElement = document.createElement("span");
  label.textContent = title;


   // Creating delete button 
    const btn: HTMLButtonElement = document.createElement("button");
    btn.innerText = "X";
    btn.className = "deleteBtn" ;
    btn.onclick = () =>{
      deleteTodo();
    }

     const deleteTodo = () =>{
      
      const updateTodos = todos.filter((todo) => todo.id != id);

      todos.length = 0 ;
      todos.push(...updateTodos);

      renderTodo(todos);
     }
     
  // append checkbox and label to the todo element
  todo.appendChild(checkBox);
  todo.appendChild(label);
  todo.appendChild(btn);

  return todo; // ✅ return the element so renderTodo can use it
};



const renderTodo = (todos: Todo[]) => {
  todoContainer.innerHTML = ""; // ✅ clear existing todos before rendering

  todos.forEach((item) => {
    const todoElement = generateTodo(item.title, item.isCompleted, item.id);
    todoContainer.appendChild(todoElement); // ✅ actually add the todo to the container
  });
};
