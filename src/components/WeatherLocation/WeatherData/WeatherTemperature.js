import React from 'react';
import WeatherIcons from 'react-weathericons';
const WeatherTemperature=({temperature})=>{
  return(<div>
      <WeatherIcons name={'day-sunny'} />
      {temperature}  °C
  </div>)
}
export default WeatherTemperature;