import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import useWeather from '../useWeather';

describe('useWeather', () => {
  it('adds and removes a city from favorites', () => {
    const { result } = renderHook(() => useWeather());

    act(() => {
      result.current.addFavorite('Berlin');
    });

    expect(result.current.favorites).toContain('Berlin');

    act(() => {
      result.current.removeFavorite('Berlin');
    });

    expect(result.current.favorites).not.toContain('Berlin');
  });
});
