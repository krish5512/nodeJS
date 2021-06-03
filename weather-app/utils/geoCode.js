const request = require('request')
const geoCode = (address, callBack) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?proximity=-74.70850,40.78375&limit=1&access_token=YOUR_API_KEY'

    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callBack('Unable to connect Location Service', undefined)
        } else if (response.body.features.length === 0) {
            callBack('Unable to find location', undefined)
        } else {
            callBack(undefined, response.body.features)
        }
    })

}

module.exports = geoCode;




// // Geocoding Service

// // Address -> Lat/Long -> Weather
// const loactionUrl = 'http://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&limit=1&access_token=YOUR_API_KEY';
// request({
//     url: loactionUrl,
//     json: true
// }, (
//     error, resp
// ) => {
//     if (error) {
//         console.log('Unable to connect Location Service')
//     } else if (resp.body.features.length === 0) {
//         console.log('Invalid request data')
//     } else {
//         const latitude = resp.body.features[0].center[1];
//         const longitude = resp.body.features[0].center[0];
//         console.log('THe location is ' + latitude + " and " + longitude)
//     }
// })
