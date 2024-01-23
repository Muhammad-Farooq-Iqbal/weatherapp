import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {
    const[time, setTime]=useState()
    const[weather,setWeather]=useState("")
    let dateAndtime=new Date().toLocaleString()
    const Time=()=>{
        dateAndtime=new Date().toLocaleString()
        setTime(dateAndtime)
    }
    setInterval(Time,1000)
 const {
        temp, humidity, pressure,
        country, sunset,name,speed,weathermood
       }=tempInfo;

       useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                setWeather("wi-day-cloudy");
                break;
                case "Haze":
                setWeather("wi-fog");
                break;
                case "Snow":
                setWeather("wi-snow");
                break;
                case "Mist":
                setWeather("wi-dust");
                break;
                case "Clear":
                setWeather("wi-day-sunny");
                break;
                default:
                    setWeather("wi-day-sunny");
                    break;
            }
        }
       },[weathermood])

       let sec=sunset
       let date=new Date(sec * 1000)
    let Timestr=`${date.getHours()}:${date.getMinutes()}`

  return (
    <>
     <article className='widget'>
<div className='weatherIcon'>
<i className={`wi ${weather}`}></i>
</div>
<div className='weatherInfo'>
 <div className='temperature'>
 <span>{temp}&deg;</span>

 </div>
 <div className='description'>
    <div className='weatherCondition'>{weathermood}</div>
    <div className='place'>{name}, {country}</div>
 </div>
</div>
<div className='date'>{ time}</div>
<div className='extra-temp'>
<div className='temp-info-minmax'> 
<div className='two-sided-section'>
<p><i className={'wi wi-sunset'}></i></p>
 <p className='extra-info-leftside'>
 {Timestr} PM
    <br />
Sunset
 </p>
</div>

<div className='two-sided-section'>
<p><i className={'wi wi-humidity'}></i></p>
 <p className='extra-info-leftside'>
 {humidity}
    <br />
    Humidity
 </p>
</div>

</div>
<div className='weather-extra-info'>

<div className='two-sided-section'>
<p><i className={'wi wi-rain'}></i></p>
 <p className='extra-info-leftside'>
 {pressure}
    <br />
    Pressure
 </p>
</div>
<div className='two-sided-section'>
<p><i className={'wi wi-strong-wind'}></i></p>
 <p className='extra-info-leftside'>
 {speed}
    <br />
    Speed
 </p>
</div>

</div>
</div>
</article> 
    </>
  )
}

export default WeatherCard
