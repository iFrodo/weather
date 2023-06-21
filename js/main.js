const apiKey ='42d632e68eef4abc9ae151808232006';
// http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
const query = 'http://api.weatherapi.com/v1/current.json?key=42d632e68eef4abc9ae151808232006&q=Simferopol&aqi=no'


fetch(query).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    console.log(data.current.temp_c)
    document.querySelector('.weather').innerHTML = `Температура в ${data.location.name}: ${data.current.temp_c} C`
})

// const Http = new XMLHttpRequest();
// Http.open('GET',query)
// Http.send();
// Http.onreadystatechange=(e)=>{
//     console.log(Http.response)
// }