export type WeatherData = {
  name: string;
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
    humidity: number;
  };
} | null;
