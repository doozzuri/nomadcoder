const $todoForm = document.querySelector("#todo-form")
const $todoInput = $todoForm.querySelector("input")
const $todoList = document.querySelector("#todo-list")
const TODOS_KEY = "todos"

const todos = storage.getItem(TODOS_KEY, [])
todos.forEach((todo) => paintTodo(todo))

function paintTodo(newTodoObj){
    const $li = document.createElement("li")
    $li.id = newTodoObj.id
    const $span = document.createElement("span")
    $span.innerText = newTodoObj.text
    const $button = document.createElement("button")
    $button.innerText = "x"
    $button.addEventListener("click", (e) => {
        const $parentLi = e.target.parentElement
        $parentLi.remove()
        const removeTodos = todos.filter((todo) => todo.id !== parseInt($parentLi.id))
        storage.setItem(TODOS_KEY, removeTodos)
    })
    $li.appendChild($span)
    $li.appendChild($button)
    $todoList.appendChild($li)   
}

$todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = $todoInput.value
    $todoInput.value = ""
    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    }
    paintTodo(newTodoObj)
    todos.push(newTodoObj)
    storage.setItem(TODOS_KEY, todos)
})