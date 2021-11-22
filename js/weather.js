const API_KEY = '8719e15f8ca67a96dd59b8e44edb8142'
function onGeoError(){
    alert("Can't find u")
}

navigator.geolocation.getCurrentPosition((p) => {
    const lat = p.coords.latitude;
    const lng = p.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const $location = document.querySelector("#weather span:first-child")
            const $weather = document.querySelector("#weather span:last-child")
            $location.innerText = `${data.name} / ${data.main.temp}ºC`
            $weather.innerText = data.weather[0].main
        })
}, onGeoError)
