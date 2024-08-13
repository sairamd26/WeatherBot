// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

//React and Components
import NavBar from "./components/NavBar";
import TodayDet from './components/TodayDet.jsx';
import Forecast from './components/Forecast.jsx';
import React, { useState } from 'react';
import { useEffect } from 'react';



//App Function.
function App() {

  const [location, setLocation] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  //Getting the Location from NavBar SearchBox
  function getLocation(data){
    setLocation(data);
  }

  useEffect(() => {
    if (location) {
      fetchWeatherData(location);
    }
  }, [location]);

  async function fetchWeatherData(location) {
    //Getting the Latitude and Longitude and data.
    setLoading(true);
    try {
      const response1 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);
      const data1 = await response1.json();
      console.log(data1);

      if (!data1.results || data1.results.length === 0) {
        setLocation(null);
        setWeatherData(null);
        setLoading(false);
        return;
      }

      const latitude = data1.results[0].latitude;
      const longitude = data1.results[0].longitude;


      const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`);
      const data2 = await response2.json();
      console.log(data2);
      setWeatherData(data2);

    } catch (error) {
      console.log("Error while getting the API data", error);
      setLocation(null);
      setWeatherData(null);
    }
    setLoading(false);
  }
  

  if(loading){
    return(
      <div className='flex justify-center align-middle'>
        <div className='h-screen w-auto'>
          <h1>Loading...</h1>
        </div>  
      </div>
    )
  }
  else{
    return (
      <div className="App">
        <NavBar onSearch={getLocation}/>
        <TodayDet data={weatherData} place={location}/>
        <Forecast data={weatherData}/>
      </div>
    );
  }
}

export default App;
library.add(fab, fas, far)
