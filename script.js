const list = document.querySelector('#id')
const form = document.querySelector('#new-todo-form')
const todoInput = document.querySelector('#todo-input')
const template = document.querySelector('#list-item-template')

const LOCAL_STORAGE_PREFIX = 'ADVANCED_TODO_LIST-'
const TODO_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}todos`

let todos = loadTodos()
todos.forEach(renderTodo)

function loadTodos(){

}

function renderTodo(todo){
  
}