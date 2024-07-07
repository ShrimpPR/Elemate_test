<template>
  <div class="container">
    <h1 class="text-center my-4">Welcome to WeatherStack !</h1>
    <div class="card p-4">
      <h2 class="card-title">Weather Information</h2>
      <form @submit.prevent="fetchWeather" class="mb-4">
        <div class="mb-3">
          <label for="city" class="form-label">City</label>
          <input type="text" v-model="city" id="city" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Search</button>
      </form>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <div v-if="weather" class="mt-5">
        <h2>{{ weather.cityName }}</h2>
        <p>Temperature: {{ weather.temperature }} °C</p>
        <p>Description: {{ weather.description }}</p>
        <img :src="weather.icon" alt="Weather icon" class="img-fluid">
        <p v-if="weather.url"><a :href="weather.url" target="_blank">More details</a></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWeather } from './useWeather';
import '@/assets/styles/WeatherView.scss';

export default defineComponent({
  name: 'WeatherView',
  setup() {
    const { city, weather, error, fetchWeather } = useWeather();
    return { city, weather, error, fetchWeather };
  }
});
</script>

