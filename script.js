// API Key from OpenWeatherMap
const apiKey = '14d623107651a46090e714db7f2c6bd4';

// Select DOM elements
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');

// Fetch weather data
async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        // Update DOM elements
        cityName.textContent = `Weather in ${data.name}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Condition: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        alert(error.message);
    }
}

// Add event listener to the button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name');
    }
});