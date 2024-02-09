import axios from 'axios';
import { useState } from 'react';

const key = import.meta.env.VITE_WEATHER_API_KEY;

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([] as string[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async (city: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
      );
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching weather data');
    }
  };

  const addFavorite = (city: string) => {
    setFavorites([...favorites, city]);
  };

  const removeFavorite = (city: string) => {
    setFavorites(favorites.filter((favorite) => favorite !== city));
  };

  return {
    getWeather,
    weather,
    loading,
    error,
    favorites,
    addFavorite,
    removeFavorite,
  };
};

export default useWeather;
