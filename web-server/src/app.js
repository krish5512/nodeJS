const path = require('path')
const express = require('express')
const hbs = require('hbs');
const forecast = require("./utils/forecast");
const geoCode = require("./utils/geoCode");

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../template/views');
const partials = path.join(__dirname, '../template/partials')
// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath))

// Partials setup
hbs.registerPartials(partials);


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Krishna Kumar'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Krishna Kumar'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'You can get any help regarding this page from this section.',
        name: 'Krishna Kumar'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send({
            error: 'You must provide Address'
        })
    }
    geoCode(req.query.address, (error, {
        latitude,
        longitude
    } = {}) => {
        if (error) {
            res.send({
                error
            })
        }
        forecast(latitude, longitude, (error, wedata = {}) => {
            if (error) {
                res.send({
                    error
                })
            }
            const {
                temperature,
                weather_descriptions: desc
            } = wedata
            res.send({
                temperature,
                desc,
                address: req.query.address
            })
        })

    });

})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Krishna Kumar',
        errorMessage: 'Page not Found',
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Krishna Kumar',
        errorMessage: 'Page not Found',
    })
});
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})




// Express page routing Example Static code
// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Krishna',
//         age: 21
//     })
// })
// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })