
fetch('https://goweather.herokuapp.com/weather/Houston')
    .then(res=>res.json())
    .then(data=> {
        console.log(`la temperatura de Houston es ${data.temperature} y el viento es ${data.wind}`)
    })
    