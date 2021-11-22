const images = [
    "background01.jpg",
    "background02.jpg",
    "background03.jpg"
]

const todaysImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")
bgImage.src =  `/img/${todaysImage}`
document.body.appendChild(bgImage)