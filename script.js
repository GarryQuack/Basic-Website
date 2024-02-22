async function getWeather() {
    const cityName = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY_HERE';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if(response.ok) {
            displayWeather(data);
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('weatherResult').innerHTML = `Error: ${error.message}`;
    }
}

function displayWeather(data) {
    const { location, current } = data;
    document.getElementById('weatherResult').innerHTML = `
        <h2>Weather in ${location.name}, ${location.country}</h2>
        <p>Temperature: ${current.temp_c}°C</p>
        <p>Condition: ${current.condition.text}</p>
        <img src="http:${current.condition.icon}" alt="Weather icon">
    `;
}
