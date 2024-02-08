import useWeather from "hooks/useWeather.ts";
import SearchBar from 'components/SearchBar';
import WeatherDisplay from 'components/WeatherDisplay';
import './index.css';

function App() {
  const { weather, getWeather } = useWeather();

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={getWeather} />
      <WeatherDisplay weatherData={weather} />
    </div>
  );
}

export default App;
