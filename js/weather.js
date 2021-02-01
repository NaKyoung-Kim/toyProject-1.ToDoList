const weather = document.querySelector(".js-weather");
const weatherPlace = document.querySelector(".js-place");

const API_KEY = "3986b7662f095bcebad8e690a9c54314";
const COORDS = 'coords';

function getWeather(lat, lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&&units=metric`)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} °C`;
      weatherPlace.innerText = `${place}`;
    });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function getGeoError(){
  console.log(`Can't access geo location`);
}

function getCoords(){
  navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  
  if(loadedCoords === null){
    getCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();
};

init();