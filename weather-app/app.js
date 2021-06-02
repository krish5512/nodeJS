const forecast = require("./utils/forecast");
const geoCode = require("./utils/geoCode");

const weatherFunc = () => {
    if (process.argv.length > 2) {
        const place = process.argv[2];
        geoCode(place, (error, location) => {
            if (error) {
                return console.log(error)
            }
            forecast(location, (error, wedata) => {
                if (error) {
                    return console.log(error)
                }

                console.log('Weather is  : ' + wedata.temperature + ' and ' + wedata.weather_descriptions[0])
            })
        });
    }
    else{
        console.log('Please provide an address')
    }
}
weatherFunc()