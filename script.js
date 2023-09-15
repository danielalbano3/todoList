const list = document.querySelector('#list')
const form = document.querySelector('#new-todo-form')
const todoInput = document.querySelector('#todo-input')
const template = document.querySelector('#list-item-template')

const LOCAL_STORAGE_PREFIX = 'ADVANCED-TODO-LIST-'
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}todos`

let todos = loadTodos()
todos.forEach(renderTodos)

function saveTodos(){
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}

function loadTodos(){
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
  return JSON.parse(todosString) || []
}