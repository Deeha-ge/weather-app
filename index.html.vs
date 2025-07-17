<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="style.css" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🌈 Funky Weather App</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Fredoka&family=Pacifico&display=swap" rel="stylesheet" />
</head>
<body>
  <div class="container">
    <h1>🌦️ Weather Whimsy</h1>
    <input type="text" id="cityInput" placeholder="Enter a magical city..." />
    <div class="buttons">
      <button onclick="getWeather()">✨ Get Weather</button>
      <button onclick="getLocalWeather()">📍 Use My Location</button>
    </div>
    <div id="weatherResult"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
