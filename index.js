const input = document.querySelector('.city-input');
const button = document.querySelector('.img');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const cityName = document.querySelector('.city-name');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');
const error = document.querySelector('.error');

async function fetchData(city) {
  const API_KEY = 'a51b5cf6063e763e2e7e7ee295eccf2b';
  const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

  let response = await fetch(weatherDataURL + city);
  let data = await response.json();

  if (data.cod === '404') {
    window.alert('You have to write a valid city name!');
  }

  document.querySelector('.title').style.display = 'none';

  temperature.innerHTML = Math.round(data.main.temp) + '°';
  cityName.innerHTML = data.name;
  humidity.innerHTML = Math.round(data.main.humidity) + '%';
  windSpeed.innerHTML = Math.round(data.wind.speed) + 'km/h';

  if (data.weather[0].main === 'Clouds') {
    weatherImg.src = './images/clouds.png';
  }
  if (data.weather[0].main === 'Clear') {
    weatherImg.src = './images/clear.png';
  }
  if (data.weather[0].main === 'Snow') {
    weatherImg.src = './images/snow.png';
  }
  if (data.weather[0].main === 'Rain') {
    weatherImg.src = './images/rain.png';
  }
  if (data.weather[0].main === 'Mist') {
    weatherImg.src = './images/mist.png';
  }
  if (data.weather[0].main === 'Drizzle') {
    weatherImg.src = './images/drizzle.png';
  }

  document.querySelector('.card').style.height = '600px';
  document.querySelector('.all-weather-info').style.display = 'block';
}

button.addEventListener('click', function () {
  fetchData(input.value === '' ? 'Berlin' : input.value);
  input.value = '';
});
