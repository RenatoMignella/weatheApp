//Init Storage 
 const storage = new Storage();
//Get location data 
 const weatherlocation = storage.getLocationData();

// Init weathet object 
const weather = new Weather(weatherlocation.city,weatherlocation.country);

//INIT Ui
const ui = new UI();

// Get weather on Dom load 
 document.addEventListener('DOMContentLoaded',getWeather);

 //Change Location Event 

 document.querySelector('#w-change-btn').addEventListener('click',(e) => {
    
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    //Change Location 
    weather.chengeLocation(city, country);
    //! Set location in LS
    storage.setLocationData(city, country);

    //Get and display weather 
    getWeather();
    //Close modal
   $('#locModal').modal('hide');

 });

function getWeather(){
    weather.getWeather()
    .then(results =>{
        ui.paint(results);
        
    })
    .catch(err => console.log(err));
}

