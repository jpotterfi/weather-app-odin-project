import { getConversion } from "./conversionModule";

function convertTemp(temp) {
  let conversion = getConversion();
  let kelvin = temp;
  if (conversion == "fahrenheit") {
    let newTemp = Math.round((kelvin - 273.15) * (9 / 5 + 32));
    return newTemp;
  } else if (conversion == "celsius") {
    let newTemp = Math.round(kelvin - 273.15);
    return newTemp;
  }
}
export { convertTemp };
