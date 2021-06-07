const path = require('path')
const express = require('express')
const hbs = require('hbs');

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
        name: 'KRISHNA KUMAR'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
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
    res.send({
        forecast: 'Its 34 degree celcius and with scatter rain',
        location: 'vaishali'
    })
})
app.get('/help/*', (req, res) => {
    res.render('404',{
        title : '404',
        name: 'Krishna',
        errorMessage : 'Page not Found',
    })
})
app.get('*', (req, res) => {
    res.render('404',{
        title : '404',
        name: 'Krishna',
        errorMessage : 'Page not Found',
    })});
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