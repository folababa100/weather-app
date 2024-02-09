import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import SearchBar from '.';

describe('SearchBar', () => {
  const mockOnSearch = vi.fn();
  const mockAddFavorite = vi.fn();
  const mockWeatherData = {
    name: 'Berlin',
    weather: [{ description: 'Cloudy' }],
    main: {
      temp: 20,
      humidity: 65,
    },
  };

  beforeEach(() => {
    vi.clearAllMocks(); // Reset mocks before each test
  });

  it('calls onSearch with input value when form is submitted', () => {
    render(
      <SearchBar
        onSearch={mockOnSearch}
        addFavorite={mockAddFavorite}
        weather={mockWeatherData}
      />,
    );
    const input = screen.getByPlaceholderText('Enter city name');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(input, { target: { value: 'Berlin' } });
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith('Berlin');
  });

  it('does not call onSearch when input is empty and search button is clicked', () => {
    render(
      <SearchBar
        onSearch={mockOnSearch}
        addFavorite={mockAddFavorite}
        weather={mockWeatherData}
      />,
    );
    const searchButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.click(searchButton);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });

  it('calls addFavorite with input value when Add to favorites button is clicked', () => {
    render(
      <SearchBar
        onSearch={mockOnSearch}
        addFavorite={mockAddFavorite}
        weather={mockWeatherData}
      />,
    );
    const input = screen.getByPlaceholderText('Enter city name');
    const addToFavoritesButton = screen.getByRole('button', {
      name: 'Add to favorites',
    });

    // Ensure weather data is present and input is filled
    fireEvent.change(input, { target: { value: 'Berlin' } });
    fireEvent.click(addToFavoritesButton);

    expect(mockAddFavorite).toHaveBeenCalledWith('Berlin');
  });

  it('disables Add to favorites button when weather data is not present', () => {
    render(
      <SearchBar
        onSearch={mockOnSearch}
        addFavorite={mockAddFavorite}
        weather={null}
      />,
    );
    const addToFavoritesButton = screen.getByRole('button', {
      name: 'Add to favorites',
    });

    expect(addToFavoritesButton).toBeDisabled();
  });
});
