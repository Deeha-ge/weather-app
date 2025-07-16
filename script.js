const apiKey = '54752f88ce5805ae141973176ac8b22f'; // Replace with your OpenWeatherMap API Key
const emojiMap = {
  "Clouds": "☁️",
  "Clear": "☀️",
  "Rain": "🌧️",
  "Snow": "❄️",
  "Thunderstorm": "⚡",
  "Drizzle": "🌦️",
  "Mist": "🌫️",
  "Haze": "🌁",
  "Fog": "🌫️",
  "Smoke": "💨",
  "Dust": "🌪️"
};

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city 🌍✨");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetchWeather(url);
}

async function getLocalWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      fetchWeather(url);
    }, () => {
      alert("Couldn't access your location 🗺️💔");
    });
  } else {
    alert("Geolocation not supported in your browser! 😢");
  }
}

async function fetchWeather(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const weather = data.weather[0].main;
    const emoji = emojiMap[weather] || "🌡️";

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>${emoji} <strong>${data.weather[0].description}</strong></p>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } else {
    document.getElementById("weatherResult").innerHTML = `🚫 City not found! Try again 🌍`;
  }
}
