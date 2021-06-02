const request = require('request');

const forecast = (address, callback) => {
    const latitude = address[0].center[1];
    const longitude = address[0].center[0];
    const url = 'http://api.weatherstack.com/current?access_key=9c107dc6a7a681679e8429f819497b6d&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude);

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