const list = document.querySelector('#id')
const form = document.querySelector('#new-todo-form')
const todoInput = document.querySelector('#todo-input')
const template = document.querySelector('#list-item-template')

const LOCAL_STORAGE_PREFIX = 'ADVANCED_TODO_LIST-'
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}todos`

let todos = loadTodos()
todos.forEach(renderTodo)

function saveTodos(){
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}

function loadTodos(){
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
  return JSON.parse(todosString) || []
}

function renderTodo(todo){
  const templateClone = template.content.cloneNode(true)
  
  const listItem = template.querySelector('.list-item')
  listItem.dataset.todoId = todo.id

  const textElement = templateClone.querySelector('[data-list-item-text]')
  textElement.innerText = todo.name

  const checkbox = templateClone.querySelector('[data-list-item-checkbox]')
  checkbox.checked = todo.complete

  list.appendChild(templateClone)
}