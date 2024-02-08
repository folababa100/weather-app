import axios from 'axios';
import {useState} from "react";

const key = import.meta.env.VITE_WEATHER_API_KEY;

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching weather data");
    }
  };

  return {
    getWeather,
    weather,
    loading,
    error
  };
}

export default useWeather;
