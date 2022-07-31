import { timezoneToData } from "../time-date-functions/timezoneToData";

function sortWeather(weatherData) {
  let timezoneInfo = weatherData.timezone;
  let timezoneData = timezoneToData(timezoneInfo);
  // console.table(timezoneData);

  let cityInfo = weatherData.name;
  let countryInfo = weatherData.sys.country;
  let tempInfo = weatherData.main.temp;
  let weatherInfo = weatherData.weather[0].id;
  let weatherAdjective = convertWeatherCodeToAdj(weatherInfo);
  let localDateInfo = timezoneData.localDate;
  let localTimeInfo = timezoneData.localTime;
  let meridianInfo = timezoneData.meridian;
  let timeOfDayInfo = timezoneData.timeOfDay;
  let formattedTimeInfo = timezoneData.formattedTime;

  let info = {
    city: cityInfo,
    timezone: timezoneInfo,
    country: countryInfo,
    formattedLocation: cityInfo + ", " + countryInfo,
    temp: tempInfo,
    weather: weatherInfo,
    weatherAdj: weatherAdjective,
    localDate: localDateInfo,
    localTime: localTimeInfo,
    meridian: meridianInfo,
    timeOfDay: timeOfDayInfo,
    formattedTime: formattedTimeInfo,
  };
  // console.table(info);

  return info;
}

export { sortWeather };
