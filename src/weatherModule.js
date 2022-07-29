import { displayInfo } from "./displayInfo";
import { getWeather } from "./getWeather";
import { sortWeather } from "./sortWeather";

async function weatherModule(location) {
  let weatherObj = await getWeather(location);
  let weatherInfo = sortWeather(weatherObj);
  displayInfo(weatherInfo);
}

export { weatherModule };
