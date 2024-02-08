import React from 'react';
// import './WeatherDisplay.css';


interface WeatherDisplayProps {
  weatherData: {
    name: string;
    weather: {
      description: string;
    }[];
    main: {
      temp: number;
      humidity: number;
    };
  } | null
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  return weatherData && (
    <div className="weather-display">
        <div>
          <h2>{weatherData?.name}</h2>
          <p>{weatherData?.weather?.[0]?.description}</p>
          <p>Temperature: {weatherData?.main?.temp}°C</p>
          <p>Humidity: {weatherData?.main?.humidity}%</p>
        </div>
    </div>
  );
};

export default WeatherDisplay;
