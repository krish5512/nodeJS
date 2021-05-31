const request = require('request');


const url = 'http://api.weatherstack.com/current?access_key=9c107dc6a7a681679e8429f819497b6d&query=28.643734,77.345399';

request({
    url: url,
    json: true
}, (error, response) => {
    console.log(response.body.current)
})