# weathersAPP- Web Server Configured

App designed using node JS for backend to get the realtime Weather information of a location.
The app uses two APIs to fetch the data , one is to mapBox api which takes place details as input and returns all details as array of objects with most relavent details.
The second is for the forecast is which we are using the weatherStack api
which takes the input as latitute and longitude and returns JSON date with all weather related Data.
Along with this we have now added express to configure the local server and added UI with the help of partials and views(using handleBars)

The user have to pass the location as parameter in the node command
example :   `node src\app.js`;
<br/>
        To start with the project
            use `npm install` to install all dependency
            then use any of the above command to use the notes
