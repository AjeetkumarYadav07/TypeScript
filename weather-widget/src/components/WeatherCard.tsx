import React from 'react'

interface WeatherCardProps{
 city:string ;
 temperature: number ;
 wind: number ;
 description: string ;
 icon:string ;

}

const WeatherCard:React.FC<WeatherCardProps>  =  ({city , temperature , wind , description , icon }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2" >{city}</h2>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
         alt=""
        className='w-40 h-20' />
      <p className="text-4xl font-semibold mb-2">{temperature}°C</p>
      <p className="text-4xl font-semibold mb-2">{wind}km/h</p>

      <p className="text-gray-600 capitalize">{description}</p>
    </div>
  )
}

export default WeatherCard