import "./style.css";
import Icon from "./weather-icons/day/113.svg";
import Location from "./material-icons/location.svg";
import { getWeather } from "./getWeather";
import { weatherModule } from "./weatherModule";

console.log("it work");

const locationSVG = new Image();
locationSVG.src = Location;
const locationHolder = document.getElementById("svg-holder");
locationHolder.appendChild(locationSVG);

const myIcon = new Image();
myIcon.src = Icon;

const element = document.getElementById("image-holder");
element.appendChild(myIcon);

let searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keyup", function onEvent(e) {
  if (e.key === "Enter") {
    console.log(searchbar.value);
    weatherModule(searchbar.value);
  }
});
