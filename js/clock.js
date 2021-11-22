const $clock = document.querySelector("#clock")

function getClick() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2,"0")
    const minuts = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    $clock.innerText =`${hours}:${minuts}:${seconds}`
}

getClick()
setInterval(getClick, 1000);