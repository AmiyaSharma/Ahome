import React from 'react';
// import Weather from './Weather';

const App = () => {
  const city = 'New York';
  const weatherCondition = 'Sunny'; // You can replace this with the actual weather data

  const Weather = ({ city, weatherCondition }) => {
    return (
      <div>
        <h2>Weather in {city}</h2>
        <p>Current Weather: {weatherCondition}</p>
      </div>
    );
  };

  return (
    <div>
      <Weather city={city} weatherCondition={weatherCondition} />
    </div>
  );
};

export default App;
