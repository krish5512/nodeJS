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
                const {temperature : temp,weather_descriptions : desc} = wedata
                console.log('Weather is  : ' + temp + ' and ' + desc)
            })
        });
    }
    else{
        console.log('Please provide an address')
    }
}
weatherFunc()