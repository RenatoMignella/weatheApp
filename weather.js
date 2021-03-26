class Weather {
 constructor(city,country){
     this.apiKey = '4942146e4bf75627c69352bb16fd43d4';
     this.city = city;
     this.country = country;
    
    }


    //! Fetch weathet fom API 
     async getWeather(){
        

         const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);


         const responseData = await response.json();
          console.log(responseData);
         return responseData;

         


     }

     //Change weather location 
     chengeLocation(city,country){
        this.city = city;
        this.country = country;

     }
}