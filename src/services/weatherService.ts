// src/services/weatherService.ts
import axios from 'axios';
import { Weather } from '../models/weather';

const API_KEY = 'YOUR_WEATHERSTACK_API_KEY';
const BASE_URL = 'http://api.weatherstack.com/current';

export const getWeather = async (city: string): Promise<Weather> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        access_key: API_KEY,
        query: city
      }
    });

    if (response.data.error) {
      throw new Error(response.data.error.info);
    }

    const data = response.data;
    return {
      cityName: data.location.name,
      temperature: data.current.temperature,
      description: data.current.weather_descriptions[0],
      icon: data.current.weather_icons[0],
      url: data.request.url
    };
  } catch (error) {
    console.error('Error fetching weather data', error);
    throw error;
  }
};
