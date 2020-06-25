const creds = ""; // signup here - https://openweathermap.org/api - to get an api key
const baseApiUrl = `http://api.openweathermap.org/data/2.5/weather?APPID=${creds}&units=imperial`;


const queryWeatherForCityName = async ( cityName = '') => {
  const query = `q=${cityName},US`;
  const url = `${baseApiUrl}&${query}`;
  
  const rawJson = await fetch(url);
  const json = await rawJson.json();
  
  displaySearchResults( json );
  
};

const displaySearchResults = ( result = {} ) => {
  const cityNameContainer = $('#city-name');
  const temperatureContainer = $('#temp-container');
  
  
  cityNameContainer.html( result.name );
  temperatureContainer.html( result.main.temp + '&deg;' );
};


$(document).ready(function() {
  
  const btn = $('#test-button');
  const searchBar = $('#search-bar');
  
  btn.on('click', () => {
    const cityToSearch = searchBar.val();
    queryWeatherForCityName(cityToSearch);
  });
  
});