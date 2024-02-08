import React from 'react';

interface FavoritesProps {
  favorites: string[];
  removeFromFavorites: (city: string) => void;
  fetchWeather: (city: string) => void;
}

const Favorites: React.FC<FavoritesProps> = ({
  favorites,
  removeFromFavorites,
  fetchWeather,
}) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((city, index) => (
            <li key={index}>
              {city}
              <button onClick={() => fetchWeather(city)}>Show Weather</button>
              <button onClick={() => removeFromFavorites(city)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
