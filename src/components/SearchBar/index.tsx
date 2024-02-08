import React, { useState } from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  onSearch: (input: string) => void;
  addFavorite: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, addFavorite }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <>
      <form className="SearchBar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={() => addFavorite(input)}>Add to favorites</button>
    </>
  );
};

export default SearchBar;
