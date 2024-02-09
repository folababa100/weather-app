import React from 'react';

import CityImage from 'components/CityImage';

import { WeatherData } from 'types';

import './WeatherDisplay.scss';

interface WeatherDisplayProps {
  weather?: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  return weather ? (
    <div className="WeatherDisplay">
      <div>
        <h2>{weather?.name}</h2>
        <p>{weather?.weather?.[0]?.description}</p>
        <p>Temperature: {Math.floor(weather?.main?.temp)}°C</p>
        <p>Humidity: {weather?.main?.humidity}%</p>
      </div>
      <CityImage city={weather?.name} />
    </div>
  ) : null;
};

export default WeatherDisplay;
