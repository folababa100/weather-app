import useWeather from 'hooks/useWeather.ts';
import SearchBar from 'components/SearchBar';
import WeatherDisplay from 'components/WeatherDisplay';
import Favorites from 'components/Favourites';

import './index.css';

function App() {
  const { weather, getWeather, favorites, removeFavorite, addFavorite } =
    useWeather();

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={getWeather} addFavorite={addFavorite} />
      <WeatherDisplay weatherData={weather} />
      <Favorites
        favorites={favorites}
        removeFromFavorites={removeFavorite}
        fetchWeather={getWeather}
      />
    </div>
  );
}

export default App;
