let apiKey = "28444fe23d55a2a25e3119380dcec3a1";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let weatherIcon = document.querySelector(".weather-icon ")
console.log(weatherIcon)

async function weather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json()
    console.log(data)
    document.querySelector(".city").innerText = data.name
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerText = data.main.humidity + "%"
    document.querySelector(".wind").innerText = Math.round( data.wind.speed) + "km/hr"


    if(data.weather[0].main == "Haze" || data.weather[0].main == "Clear"){
        weatherIcon.src = "images/haze.png"
    } else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloud.png"
    }
   
    console.log(data)
     document.querySelector(".weather").style.display= "block"

}
let searchbtn = document.querySelector(".search button")
let searchbox = document.querySelector(".search input")

searchbtn.addEventListener("click", function(){
    weather(searchbox.value)
})

