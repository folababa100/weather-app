import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, Mocked, vi } from 'vitest';

import CityImage from '.';

// Mock axios
vi.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;

describe('CityImage', () => {
  it('displays an image when a city is provided', async () => {
    // Mock the axios response
    const imageUrl = 'http://example.com/test-image.jpg';
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [
          {
            urls: {
              regular: imageUrl,
            },
          },
        ],
      },
    });

    render(<CityImage city="Paris" />);

    // Wait for the image to be loaded
    const image = await screen.findByRole('img', { name: /view of Paris/i });
    expect(image).toHaveAttribute('src', imageUrl);
  });

  it('displays a message when no image is available', async () => {
    // Mock axios to return an empty array indicating no images were found
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [],
      },
    });

    render(<CityImage city="UnknownCity" />);

    // Verify that the fallback message is displayed
    expect(await screen.findByText('No image available')).toBeInTheDocument();
  });
});
