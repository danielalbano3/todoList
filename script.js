const form = document.querySelector('#new-todo-form')
const list = document.querySelector('#list')
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
  const listItem = templateClone.querySelector('.list-item')
  const checkbox = templateClone.querySelector('[data-list-item-checkbox]')
  const textElement = templateClone.querySelector('[data-list-item-text]')

  listItem.dataset.todoId = todo.id 
  checkbox.checked = todo.complete 
  textElement.innerText = todo.name 

  list.appendChild(templateClone)
}

list.addEventListener('change', e => {
  if (!e.target.matches('[data-list-item-checkbox]')) return

  const parent = e.target.closest('.list-item')
  const todoId = parent.dataset.todoId
  const todo = todos.find(t => t.id === todoId)

  todo.complete = e.target.checked

  saveTodos()
})

list.addEventListener('click', e => {
  if (!e.target.matches('[data-button-delete]')) return

  const parent = e.target.closest('.list-item')
  const todoId = parent.dataset.todoId
  
  parent.remove()

  todos = todos.filter(t => t.id !== todoId)
  saveTodos()
})

form.addEventListener('submit', e => {
  e.preventDefault()

  const todoName = todoInput.value
  if (todoName === '') return
  
  const newTodo = {
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString()
  }
  todos.push(newTodo)
  renderTodo(newTodo)
  saveTodos()
  todoInput.value = ''
})