const request = require('request');

const forecast = (address, callback) => {
    const latitude = address[0].center[1];
    const longitude = address[0].center[0];
    const url = 'http://api.weatherstack.com/current?access_key=YOUR_API_KEY&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude);

    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to fetch weatherData', undefined);
        } else if (response.body.error) {
            callback('Please check the request.Unable to find the weather', undefined)
        } else {
            callback(undefined, response.body.current)
        }
    })
}

module.exports = forecast;



// const weatherUrl = 'http://api.weatherstack.com/current?access_key=YOUR_API_KEY&query=28.643734,77.345399&units=f';

// request({
//     url: weatherUrl,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect Weather Service')
//     } else if (response.body.error) {
//         console.log('Unable to find the location')
//     } else {
//         const current = response.body.current;
//         console.log(current.weather_descriptions[0] + " It is currently " + current.temperature + " degrees out, It feels like " + current.feelslike + " degrees out.")
//     }

// })
