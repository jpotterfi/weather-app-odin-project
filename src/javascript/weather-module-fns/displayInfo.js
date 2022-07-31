function displayInfo(info) {
  console.table(info);

  let localDateAnchor = document.getElementById("info__date");
  let localTimeAnchor = document.getElementById("info__time");
  let locationAnchor = document.getElementById("info__location");
  let writtenWeatherAnchor = document.getElementById("info__written");
  localDateAnchor.innerText = info.localDate;
  localTimeAnchor.innerText = info.formattedTime;
  locationAnchor.innerText = info.formattedLocation;
  writtenWeatherAnchor.innerText = info.formattedWeather;
  //have function that styles everything before appended
}
export { displayInfo };
