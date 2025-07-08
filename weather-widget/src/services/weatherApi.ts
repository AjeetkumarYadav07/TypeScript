export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

// fetching data
export async function fetchWeather(city: string): Promise<WeatherData> {
  // const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_KEY = "6b66ca99dcbbafa52bdeadc48ce6aeab";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = (await response.json()) as WeatherData;
  console.log(data);
  return data;
}
