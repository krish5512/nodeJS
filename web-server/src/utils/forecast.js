const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9c107dc6a7a681679e8429f819497b6d&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);

    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to fetch weatherData', undefined);
        } else if (response.body.error) {
            callback('Please check the request.Unable to find the weather', undefined)
        } else {
            const {
                current
            } = response.body;
            callback(undefined, current)
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