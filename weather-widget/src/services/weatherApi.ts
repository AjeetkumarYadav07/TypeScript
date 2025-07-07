
export interface WeatherData {
    name:string ;
    main:{
        temp:number;  

    };
    wind:{
        speed:number
    }
    weather:{
        description:string;
        icon:string;
    }[];
   
}

//fetching data 
export async function fetchWeather (city:string):Promise<WeatherData> {
   //creating call

   const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`
   );

  if(!response.ok){
    throw new Error("City not found ");
  }
  const data = ( await response.json() ) as WeatherData ;
  console.log(data);
  return data ;

};

