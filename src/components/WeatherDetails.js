import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import { fetchWeatherData } from '../services/WeatherService';
import './WeatherDetails.css';

const WeatherDetails = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    const data = await fetchWeatherData(city);
    console.log('Fetched weather data:', data); 
    setWeatherData(data);
  };

  return (
    <div className="weather-details">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city!!"
      />
      <button onClick={handleSearch}>Search</button>
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default WeatherDetails;
