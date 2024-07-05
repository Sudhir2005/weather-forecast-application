
export const fetchWeatherData = async (city) => {
    try {
      const apiKey = 'd16cca4b256c43cfb2f55857240507'; 
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
  
      if (!response.ok) {
        throw new Error('City not found');
      }
  
      const data = await response.json();
      console.log('API response data:', data);
  
      return {
        city: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return {
        city: 'Unknown',
        temperature: 'N/A',
        condition: 'N/A',
      };
    }
  };
  