import { useEffect, useState } from 'react';
import './App.css'
import WeatherCard from './components/WeatherCard'
import { fetchWeather,  } from './services/weatherApi';
import type { WeatherData } from "./services/weatherApi";
import SearchBox from './components/SearchBox';
function App() {
  const [weather , setWeather] = useState<WeatherData | null>(null);
  const [loading , setLoading] = useState(true);
  const [error , setError]     = useState<string |null >(null);

  useEffect(()=>{
    const loadWeahter = async () =>{
        try{ 
          const data = await fetchWeather("Una");
          setWeather(data);
        
        } catch (err){
             setError((err as Error).message)
           
        } finally{
          setLoading(false);
        } ;
        
    }
    
   loadWeahter();
  },[]);
  
  if(loading) return <div className="text-center mt-10">Loading...</div>;
  if(error)  return <div className="text-center mt-10 text-red-500">{error}</div>;
  if(!weather) return null ;

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SearchBox/>
      <WeatherCard
       city={weather.name}
       temperature={Math.round(weather.main.temp)}
       wind={weather.wind.speed}
       description= {weather.weather[0].description}
       icon={weather.weather[0].icon}

      />
    </div>
  );
}

export default App;



