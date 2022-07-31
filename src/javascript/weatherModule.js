import { displayInfo } from "./weather-module-fns/displayInfo";
import { getWeather } from "./weather-module-fns/getWeather";
import { sortWeather } from "./weather-module-fns/sortWeather";

async function weatherModule(location) {
  let weatherObj = await getWeather(location);
  let weatherInfo = sortWeather(weatherObj);
  displayInfo(weatherInfo);
}

export { weatherModule };
