const request = require('request');


const weatherUrl = 'http://api.weatherstack.com/current?access_key=9c107dc6a7a681679e8429f819497b6d&query=28.643734,77.345399&units=f';

request({
    url: weatherUrl,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect Weather Service')
    } else if (response.body.error) {
        console.log('Unable to find the location')
    } else {
        const current = response.body.current;
        console.log(current.weather_descriptions[0] + " It is currently " + current.temperature + " degrees out, It feels like " + current.feelslike + " degrees out.")
    }

})

// Geocoding Service

// Address -> Lat/Long -> Weather
const loactionUrl = 'http://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&limit=1&access_token=pk.eyJ1Ijoia3Jpc2huYTMyMSIsImEiOiJja3BkbWRqcWYwMHhjMndxcnkwZmRtMGRjIn0.cDuAik58B0F-2_ZgUiOKgQ';
request({
    url: loactionUrl,
    json: true
}, (
    error, resp
) => {
    if (error) {
        console.log('Unable to connect Location Service')
    } else if (resp.body.features.length === 0) {
        console.log('Invalid request data')
    } else {
        const latitude = resp.body.features[0].center[1];
        const longitude = resp.body.features[0].center[0];
        console.log('THe location is ' + latitude + " and " + longitude)
    }





})