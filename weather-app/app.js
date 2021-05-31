const request = require('request');


const url = 'http://api.weatherstack.com/current?access_key=9c107dc6a7a681679e8429f819497b6d&query=28.643734,77.345399&units=f';

request({
    url: url,
    json: true
}, (error, response) => {
    const current = response.body.current;
    console.log(current.weather_descriptions[0] + " It is currently " + current.temperature + " degrees out, It feels like " + current.feelslike + " degrees out.")
})