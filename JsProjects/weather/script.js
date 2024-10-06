document.addEventListener("DOMContentLoaded", () => {
  const CityInput = document.querySelector("#city-input");
  const getWeatherBtn = document.querySelector("#get-weather-btn");
  const errorMsg = document.querySelector("#error-message");
  const weatherInfo = document.querySelector("#weather-info");
  const cityName = document.querySelector("#city-name");
  const temp = document.querySelector("#temperature");
  const des = document.querySelector("#description");

  const API_KEY = "9fbe05a99573c194a385102e8990e676";

  getWeatherBtn.addEventListener("click", async () => {
    let city = CityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      renderData(weatherData);
      console.log(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // gets data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  }

  function renderData(weatherData) {
    // displays data
    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
    cityName.textContent = weatherData.name;
    temp.innerHTML = `<h3> ${Math.ceil(
      ((weatherData.main.temp - 32) * 5) / 9
    )} &deg;C</h3>`;
    des.textContent = weatherData.weather[0].description;
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
