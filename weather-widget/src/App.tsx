import { useEffect, useState } from 'react';
import './App.css'
import WeatherCard from './components/WeatherCard'
import { fetchWeather,  } from './services/weatherApi';
import type { WeatherData } from "./services/weatherApi";
import SearchBox from './components/SearchBox';
function App() {
  const [city , setCity] = useState("Delhi") ;
  const [weather , setWeather] = useState<WeatherData | null>(null);
  const [error , setError]     = useState<string |null >(null);

   const handleSearch =  async () =>{
           setError(null);

           try{
             const data = await fetchWeather(city);
              setWeather(data);
              setCity(" ") ;
               
           }
           catch (err) {
             setError((err as Error).message) 
             setWeather(null)

           }
   }
    // ✅ Fetch weather for default city once on first load
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4" >
      <SearchBox  city={city} onCityChange={setCity}  onSearch={handleSearch} />
    
      {error && <div className="text-center text-red-500">{error}</div>}

      {weather   && !error && (
      <WeatherCard
       city={weather.name}
       temperature={Math.round(weather.main.temp)}
       wind={weather.wind.speed}
       description= {weather.weather[0].description}
       icon={weather.weather[0].icon}

      />
     ) }  
    </div>
  );
}
export default App;



