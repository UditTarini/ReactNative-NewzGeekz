import {weather_api } from '../Config/config';



export async function fetchWeather(lat, lon, loc) { 

    try {
    let weatherData= 
    (lat!= null && lon!=null)?
    (await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${weather_api}`
    )):
    (await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${weather_api}`
      ))
    console.log(lat,lon,loc)
    let result = await weatherData.json()
    console.log(weatherData)
    return result
 
  }
catch(error) {
    throw error;
}
}


