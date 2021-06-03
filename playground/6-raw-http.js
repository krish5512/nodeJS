const http = require('http');

const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/vaishali.json?proximity=-74.70850,40.78375&limit=1&access_token=pk.eyJ1Ijoia3Jpc2huYTMyMSIsImEiOiJja3BkbWRqcWYwMHhjMndxcnkwZmRtMGRjIn0.cDuAik58B0F-2_ZgUiOKgQ'


const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})


request.end();