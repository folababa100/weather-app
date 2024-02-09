import WeatherDisplay from '.';
import { render, screen } from '@testing-library/react';

import { vi, describe, it, expect } from 'vitest';

// Mock the CityImage component
vi.mock('components/CityImage', () => ({
  __esModule: true,
  default: () => <div>CityImage Mock</div>,
}));

describe('WeatherDisplay', () => {
  const mockWeatherData = {
    name: 'Berlin',
    weather: [{ description: 'Cloudy' }],
    main: {
      temp: 20,
      humidity: 65,
    },
  };

  it('renders correctly with weather data', () => {
    render(<WeatherDisplay weather={mockWeatherData} />);
    expect(screen.getByText('Berlin')).toBeInTheDocument();
    expect(screen.getByText('Cloudy')).toBeInTheDocument();
    expect(screen.getByText('Temperature: 20°C')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 65%')).toBeInTheDocument();
    expect(screen.getByText('CityImage Mock')).toBeInTheDocument(); // Check if CityImage is rendered
  });

  it('does not render without weather data', () => {
    const { container } = render(<WeatherDisplay />);
    expect(container).toBeEmptyDOMElement();
  });
});
