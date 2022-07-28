import "./style.css";
import Icon from "./weather-icons/day/113.svg";
import Location from "./material-icons/location.svg";

console.log("it work");

const locationSVG = new Image();
locationSVG.src = Location;
const locationHolder = document.getElementById("svg-holder");
locationHolder.appendChild(locationSVG);

const myIcon = new Image();
myIcon.src = Icon;

const element = document.getElementById("image-holder");
element.appendChild(myIcon);
