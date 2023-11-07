import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error( error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city, fetchWeather]); // Include fetchWeather as a dependency

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weatherData && (
        <div>
          <h3>Weather in {city}</h3>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Description: {weatherData.description}</p>
          <p>Wind: {weatherData.wind}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

// import React, { useState, useEffect, useCallback } from 'react';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const fetchWeather = useCallback(async () => {
//     try {
//       const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
//       const data = await response.json();
//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   }, [city]);

//   useEffect(() => {
//     if (city) {
//       fetchWeather();
//     }
//   }, [city, fetchWeather]);

//   return (
//     <div>
//       <h2>Weather App</h2>
//       <input
//         type="text"
//         placeholder="Enter a city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={fetchWeather}>Get Weather</button>

//       {weatherData && (
//         <div>
//           <h3>Weather in {city}</h3>
//           <p>Temperature: {weatherData.temperature}</p>
//           <p>Description: {weatherData.description}</p>
//           <p>Wind: {weatherData.wind}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;


