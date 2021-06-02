const request = require('request')
const geoCode = (address, callBack) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?proximity=-74.70850,40.78375&limit=1&access_token=pk.eyJ1Ijoia3Jpc2huYTMyMSIsImEiOiJja3BkbWRqcWYwMHhjMndxcnkwZmRtMGRjIn0.cDuAik58B0F-2_ZgUiOKgQ'

    request({
        url: url,
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
// 