const { contentType } = require("express/lib/response");

/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=';
const apiKey = '1f12b2df013448113e58acf16943d12f';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Make a GET request using fetch
const getWeather = async (url, zip, apiKey) => {
    const res = await fetch(url+zip+apiKey);
    try {
        const newData = await res.json();
        console.log(newData);

    } catch {
        console.log(error);
    }
}

// Make a post request
const postWeather = async (path='', data={}) => {
    const res = await fetch(path, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log(error);
    }

}

// Make a event listener
document.getElementById('generate').addEventListener('click', performAction);

const performAction = () => {
    const zip = document.getElementById('zip').value;
    const userReponse = document.getElementById('feelings').value;
    getWeather(baseURL, zip, apiKey)
    .then(data=>{
        console.log(data);
        postWeather('/addData', {temperature: data.main.temp, date: d, userResponse: userReponse})
    })
    .then(
        updateUI()
    );
}

const updateUI = async()=>{
    const res = await fetch('/projectData');
    try{
        const allData = await res.json();
        document.getElementById('temp').innerHTML=allData[0].temperature;
        document.getElementById('date').innerHTML=allData[0].date;
        document.getElementById('content').innerHTML=allData[0].userResponse;

    }catch(error){
        console.log(error);
    }
}