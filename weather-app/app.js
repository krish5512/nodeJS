const request = require('request');


const url = 'http://api.weatherstack.com/current?access_key="YOUR_API_KEY"&query=28.643734,77.345399&units=f';

request({
    url: url,
    json: true
}, (error, response) => {
    const current = response.body.current;
    console.log(current.weather_descriptions[0] + " It is currently " + current.temperature + " degrees out, It feels like " + current.feelslike + " degrees out.")
})
