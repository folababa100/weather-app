import React from 'react';
import { WeatherData } from 'types';

// import './WeatherDisplay.css';

interface WeatherDisplayProps {
  weather: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  return (
    weather && (
      <div className="weather-display">
        <div>
          <h2>{weather?.name}</h2>
          <p>{weather?.weather?.[0]?.description}</p>
          <p>Temperature: {weather?.main?.temp}°C</p>
          <p>Humidity: {weather?.main?.humidity}%</p>
        </div>
      </div>
    )
  );
};

export default WeatherDisplay;
