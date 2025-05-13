async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '19ad43507f09d5c3032156239ae9ac5c'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    const weatherDiv = document.getElementById('weatherResult');
    
    if (data.cod == 200) {
      weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    } else {
      weatherDiv.innerHTML = `<p>City not found. Please try again.</p>`;
    }
  }
  