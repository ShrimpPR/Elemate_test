<template>
  <div class="container">
    <h1>Weather Information</h1>
    <form @submit.prevent="fetchWeather">
      <div class="mb-3">
        <label for="city" class="form-label">City</label>
        <input type="text" v-model="city" id="city" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Search</button>
    </form>
    <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    <div v-if="weather" class="mt-5">
      <h2>{{ weather.cityName }}</h2>
      <p>Temperature: {{ weather.temperature }} °C</p>
      <p>Description: {{ weather.description }}</p>
      <img :src="weather.icon" alt="Weather icon">
      <p v-if="weather.url"><a :href="weather.url" target="_blank">More details</a></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getWeather } from '../services/weatherService';
import { Weather } from '../models/weather';

export default defineComponent({
  name: 'WeatherView',
  setup() {
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
});
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
