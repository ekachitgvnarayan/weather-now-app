import axios from "axios";

export const getCoordinates = async (city) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
  const response = await axios.get(url);
  if (response.data.results && response.data.results.length > 0) {
    const { latitude, longitude } = response.data.results[0];
    return { latitude, longitude };
  } else {
    throw new Error("City not found");
  }
};

export const getWeatherData = async (lat, lon) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_min,temperature_2m_max,weather_code&current=temperature_2m,is_day,precipitation,weather_code,wind_speed_10m,cloud_cover&timezone=auto`;
  const response = await axios.get(url);
  return response.data;
};