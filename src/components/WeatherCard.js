import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <p>{data.temperature} °C</p>
    </div>
  );
};

export default WeatherCard;
