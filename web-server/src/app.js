const express = require('express')

console.log(__dirname);
console.log(__filename)
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Weather</h1>');
})


app.get('/help', (req, res) => {

    res.send({
        name: 'Krishna',
        age: 21
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})
app.get('/weather', (req, res) => {
    res.send({
        forecast : 'Its 34 degree celcius and with scatter rain',
        location : 'vaishali'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})