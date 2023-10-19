function getWeather() {
  let cityInput = document.getElementById('city-input');
  let cityName = document.getElementById('city-name');
  let temperature = document.getElementById('temperature');
  let condition = document.getElementById('condition');


  const city = cityInput.value;
  if (city==="") {
      alert('Please enter a city name.');
    
  }


  fetch(`https://goweather.herokuapp.com/weather/${city}`)
      .then(response => response.json())
      
      .then(data => {
        
          cityName.textContent = data.location;
          temperature.textContent = data.temperature;
          condition.textContent = data.description;
      })
      .catch(error => {
          console.error("error");
   
      });
      
}
