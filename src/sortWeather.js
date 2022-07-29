function sortWeather(weatherData) {
  let info = {
    city: weatherData.name,
    timezone: weatherData.timezone,
    country: weatherData.sys.country,
    temp: weatherData.main.temp,
    weather: weatherData.weather[0].id,
  };

  return info;
}

export { sortWeather };
