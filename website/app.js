/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=';
const apiKey = '1f12b2df013448113e58acf16943d12f';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Make a GET request
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
const postWeather = async (url, zip, )

// Make a event listener
document.getElementById('generate').addEventListener('click', performAction);

const performAction = () => {
    const zip = document.getElementById('zip').value;
    getWeather(baseURL, zip, apiKey)
    .then(data=>{
        console.log(data);
    });
}