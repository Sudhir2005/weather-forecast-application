export const fetchWeatherData = async (city) => {
    try {
      const apiKey = 'LdAXTYRN5cvZpIlh0yneDFYRxatYCGUp'; 
      const response = await fetch(`https://api.tomorrow.io/v4/timelines?location=${city}&fields=temperature&fields=weatherCode&timesteps=current&units=metric&apikey=${apiKey}`);
  
      if (!response.ok) {
        throw new Error('City not found');
      }
  
      const data = await response.json();
      console.log('API response data:', data); 
  
      const weather = data.data.timelines[0].intervals[0].values;
      return {
        city: city,
        temperature: weather.temperature,
        condition: weather.weatherCode,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return {
        city: 'Unknown',
        temperature: 'N/A',
      };
    }
  };
  