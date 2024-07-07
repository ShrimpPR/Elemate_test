import { ref } from 'vue';
import { getWeather } from '../services/weatherService';
import { Weather } from '../models/weather';

export function useWeather() {
  const city = ref('');
  const weather = ref<Weather | null>(null);
  const error = ref<string | null>(null);

  const fetchWeather = async () => {
    error.value = null;
    weather.value = null;
    if (city.value) {
      try {
        weather.value = await getWeather(city.value);
      } catch (err) {
        error.value = 'City not found. Please try another city.';
      }
    }
  };

  return { city, weather, error, fetchWeather };
}
