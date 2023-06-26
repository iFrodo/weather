const apiKey ='42d632e68eef4abc9ae151808232006';
// http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
const query = 'http://api.weatherapi.com/v1/current.json?key=42d632e68eef4abc9ae151808232006&q=Simferopol&aqi=no'


fetch(query).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    console.log(data.current.temp_c)
    document.querySelector('.weather__temp').innerHTML = `Температура в ${data.location.name}: ${data.current.temp_c} C`
    document.querySelector('.weather__wind').innerHTML= `Скорость ветра: ${Math.ceil(data.current.wind_kph / 3.6)}м/c (${data.current.wind_kph} км/ч)`
    document.querySelector('.weather__humidity').innerHTML = `Влажность: ${data.current.humidity}%`
    document.querySelector('.weather__condition').innerHTML = data.current.condition.text
    // const img = document.createElement('img').setAttribute('src',`'https:${data.current.condition.icon}'`)
    console.log(document.querySelector('.weather__ico').src = data.current.condition.icon)
})

// const Http = new XMLHttpRequest();
// Http.open('GET',query)
// Http.send();
// Http.onreadystatechange=(e)=>{
//     console.log(Http.response)
// }