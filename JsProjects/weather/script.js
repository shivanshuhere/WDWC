document.addEventListener("DOMContentLoaded", () => {
  const CityInput = document.querySelector("#city-input");
  const getWeatherBtn = document.querySelector("#get-weather-btn");
  const errorMsg = document.querySelector("#error-message");
  const weatherInfo = document.querySelector("#weather-info");

  const API_KEY = "9fbe05a99573c194a385102e8990e676";

  getWeatherBtn.addEventListener("click", async () => {
    let city = CityInput.value.trim();
    if (!city) return;
    try {
      const weatherData = await fetchWeatherData(city);
      renderData(weatherData);
    } catch (error) {
      showError();
    }
    renderData();
  });

  async function fetchWeatherData(city) {
    // gets data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
  }

  function renderData(weatherData) {
    // displays data
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
