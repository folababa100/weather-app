import useWeather from 'hooks/useWeather';

import SearchBar from 'components/SearchBar';
import WeatherDisplay from 'components/WeatherDisplay';
import Favorites from 'components/Favourites';

function App() {
  const { weather, getWeather, favorites, removeFavorite, addFavorite } =
    useWeather();

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar
        onSearch={getWeather}
        addFavorite={addFavorite}
        weather={weather}
      />
      <WeatherDisplay weather={weather} />
      <Favorites
        favorites={favorites}
        removeFromFavorites={removeFavorite}
        fetchWeather={getWeather}
      />
    </div>
  );
}

export default App;
