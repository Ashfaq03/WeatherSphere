//accessing weather API
const apiKey = "62224caf53063f079298c102a17cbd50";
// const apiKey = "f00c38e0279b7bc85480c3fe775d518c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function checkWeather(cityName) {
  const tempUrl = `${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(tempUrl);
    const data = await res.json();
    if (res.ok) {
      showWeatherOnApp(data);
    } else {
    //   alert("City not found. Please try again.");
      document.querySelector(".weather").style.display  = "none";
      document.querySelector(".error").style.display  = "block";

    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
// checkWeather("germany");

function showWeatherOnApp(data) {
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
  let weather = (data.weather[0].main).toLowerCase();
//   console.log(weather)
  document.querySelector(".weather-icon").src = `images/${weather}.png`;
  document.querySelector(".weather").style.display  = "block";
  document.querySelector(".error").style.display  = "none";
}

let searchBtn = document.querySelector("button")

searchBtn.addEventListener("click", () => {
  const searchedCity = document.querySelector("input").value;
  checkWeather(searchedCity);
});
