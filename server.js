// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})

// Add a GET route that returns the projectData object
app.get('/projectData', (req, res)=>{
    res.send(projectData);
})

// Add a POST route that adds incoming data to projectData
app.post('/addData', (req, res)=>{
    const newData = req.body;
    const newEntry = {
        temperature: newData.temperature,
        date: newData.date,
        userReponse: newData.userReponse
    }
    projectData.push(newEntry);
})

// Add a POST route 