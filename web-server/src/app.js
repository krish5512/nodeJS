const path = require('path')
const express = require('express')
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
app.set('view engine', 'hbs');

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Its 34 degree celcius and with scatter rain',
        location: 'vaishali'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})




// Express page routing Example
// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Krishna',
//         age: 21
//     })
// })
// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })