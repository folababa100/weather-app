import React, { useState } from 'react';
import './SearchBar.scss';
import { WeatherData } from 'types';

interface SearchBarProps {
  onSearch: (input: string) => void;
  addFavorite: (city: string) => void;
  weather: WeatherData;
}

const SearchBar: React.FC<SearchBarProps> = ({
  weather,
  onSearch,
  addFavorite,
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div className="w-100">
      <form className="SearchBar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={!input} type="submit">
          Search
        </button>
      </form>
      <button
        type="button"
        disabled={!weather}
        onClick={() => addFavorite(input)}
      >
        Add to favorites
      </button>
    </div>
  );
};

export default SearchBar;
