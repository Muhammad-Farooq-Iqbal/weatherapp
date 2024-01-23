import React, { useEffect, useState } from 'react'
import "./index.css"
import WeatherCard from './WeatherCard'
const Temp = () => {
    const[searchValue, setSearchValue]=useState("Islamabad")
    const[tempInfo,settempInfo]=useState({})
    const getWeatherInfo= async()=>{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue},pakistan&units=metric&APPID=39b918c85dfd3d2324f8202e2f3d7c3f`;
            const res=await fetch(url)
            const data= await res.json();
            const {temp, humidity, pressure}=data.main;
            const {country, sunset}=data.sys;
            const {name}=data;
            const{speed}=data.wind;
            const{main:weathermood}=data.weather[0]
            const{icon:icon,description:description}=data.weather[0]
            console.log(description,sunset,temp,humidity,pressure,weathermood,country,name,speed,icon)
            
            const myNewWeatherInfo={
                temp, humidity, pressure,
                country, sunset,name,speed,weathermood
               }
               settempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error)    
            }
         }
    useEffect(()=>{
        getWeatherInfo()
    },[])
  return (
    <>
    <div className='wrap'>
    <div className='search'>
        <input type="search" name="" id="search" placeholder='search ...' autoFocus className='searchTerm' value={searchValue} onChange={(event)=>{
            return(setSearchValue(event.target.value))
        }}/>
        <button className='searchButton' type="button" onClick={getWeatherInfo}>Search</button>
    </div>
    </div>
    <WeatherCard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp
