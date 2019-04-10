import React from 'react';
import WeatherExtraInfo  from './WeatherExtrainfo';
import WeatherTemperature from './WeatherTemperature';
const WeatherData=()=>{
    return (<div>
        <WeatherTemperature temperature={20}></WeatherTemperature>
        <WeatherExtraInfo humidity={20} wind={12}></WeatherExtraInfo>
    </div>)
}
export default WeatherData;