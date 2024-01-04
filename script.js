const apiKey = '99bda8fa7c09743b33df53374db71088';
const apiUrl =  'https://api.openweathermap.org/data/2.5/weather';
const locationInput = document.getElementById('location-input');
const searchButton = document.getElementById('searcher');
const locationElement = document.getElementById('location');
const tempElement = document.getElementById('temperature');
const descElement = document.getElementById('description');

searchButton.addEventListener('click' ,() => {
    const location = locationInput.value;
    if(location)
    {
        fetchWeather(location);
    }
});
function fetchWeather(location)
{
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        locationElement.textContent = data.name;
        tempElement.textContent = `${Math.round(data.main.temp)}°C`;
        descElement.textContent = data.weather[0].description;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}