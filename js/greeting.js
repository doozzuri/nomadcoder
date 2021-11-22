const $loginForm = document.querySelector("#login-form")
const $loginInput = $loginForm.querySelector("input")
const $loginH2 = document.querySelector("#greeting")

const HIDDEN_CLASS = "hidden"
const USER_NM = "username"


function paintGreeting(usernm){
    $loginH2.classList.remove(HIDDEN_CLASS)
    $loginH2.innerText = `hello! ${usernm}`
}

const savedUsernm = storage.getItem(USER_NM, "")
if(savedUsernm === ""){
    $loginForm.classList.remove(HIDDEN_CLASS)
    $loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        $loginForm.classList.add(HIDDEN_CLASS)
        const usernm = $loginInput.value
        storage.setItem(USER_NM, usernm)
        paintGreeting(usernm)
    })
}else{
    paintGreeting(savedUsernm)
}