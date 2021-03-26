class UI {
  constructor() {
     this.location = document.querySelector('.w-location');
     this.desc = document.querySelector('#w-desc');
     this.string = document.querySelector('.w-string');
     this.icon = document.querySelector('#w-icon');
     this.humidity = document.querySelector('#w-humidity');
     this.feelsLike = document.querySelector('#w-feels-like');
     this.dewpoint = document.querySelector('#w-dewpoint');
     this.wind = document.querySelector('#w-wind');
     

  }

  paint(weather){
    
    this.location.textContent = `${weather.name}, ${weather.sys.country}` ;
    this.desc.textContent = weather.weather[0].description.toUpperCase(); 
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.string.textContent = `${Math.round(weather.main.temp /10) +'°C'}`; 
    this.wind.textContent= `Wind Speed: ${weather.wind.speed}m/s | Wind Direction: ${weather.wind.deg} degrees`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity+'kg/m³'}`;
    this.dewpoint.textContent = `Actual Pressure: ${weather.main.pressure + ' ' +'N/m2'}`;
    this.feelsLike.textContent= `Feels Like: ${Math.round(weather.main.feels_like /10)+'°C'}`;
    
  }

}
