import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Favorites from '.';

describe('Favorites', () => {
  const mockRemoveFromFavorites = vi.fn();
  const mockFetchWeather = vi.fn();
  const favorites = ['Berlin', 'London'];

  beforeEach(() => {
    vi.clearAllMocks(); // Reset mocks before each test
  });

  it('displays the favorites list correctly', () => {
    render(
      <Favorites
        favorites={favorites}
        removeFromFavorites={mockRemoveFromFavorites}
        fetchWeather={mockFetchWeather}
      />,
    );

    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Berlin')).toBeInTheDocument();
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getAllByText('Show Weather').length).toBe(favorites.length);
    expect(screen.getAllByText('Remove').length).toBe(favorites.length);
  });

  it('displays a message when there are no favorites', () => {
    render(
      <Favorites
        favorites={[]}
        removeFromFavorites={mockRemoveFromFavorites}
        fetchWeather={mockFetchWeather}
      />,
    );

    expect(screen.getByText('No favorites added yet.')).toBeInTheDocument();
  });

  it('calls fetchWeather when the Show Weather button is clicked', () => {
    render(
      <Favorites
        favorites={favorites}
        removeFromFavorites={mockRemoveFromFavorites}
        fetchWeather={mockFetchWeather}
      />,
    );

    const showWeatherButtons = screen.getAllByText('Show Weather');
    fireEvent.click(showWeatherButtons[0]); // Click the first button

    expect(mockFetchWeather).toHaveBeenCalledWith('Berlin');
  });

  it('calls removeFromFavorites when the Remove button is clicked', () => {
    render(
      <Favorites
        favorites={favorites}
        removeFromFavorites={mockRemoveFromFavorites}
        fetchWeather={mockFetchWeather}
      />,
    );

    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[0]); // Click the first button

    expect(mockRemoveFromFavorites).toHaveBeenCalledWith('Berlin');
  });
});
