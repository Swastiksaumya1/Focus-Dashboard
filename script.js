// ============================================
// FOCUS DASHBOARD - Improved JavaScript
// ============================================

// Clock Function
setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

  // Convert to 12-hour format
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  // Add leading zeros if needed
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // Display the time
  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
  document.getElementById("clock").innerHTML = currentTime;
}
showTime();

// Greeting Function with Date
function setGreeting() {
  const greetingElement = document.getElementById("greeting");
  const dateElement = document.getElementById("currentDate");
  const now = new Date();
  const currentHour = now.getHours();
  let message = "";

  if (currentHour >= 5 && currentHour < 12) {
    message = "Good Morning, Swastik!";
  } else if (currentHour >= 12 && currentHour < 18) {
    message = "Good Afternoon, Swastik!";
  } else if (currentHour >= 18 && currentHour < 22) {
    message = "Good Evening, Swastik!";
  } else {
    message = "Working late? Don't forget to sleep!";
  }

  greetingElement.innerText = message;
  dateElement.innerText = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Call both functions when page loads
window.addEventListener("DOMContentLoaded", () => {
  showTime();
  setGreeting();
});

// Quote API Function
async function getNewQuote() {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");

  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    quoteText.innerText = `"${data.content}"`;
    authorText.innerText = `- ${data.author}`;
  } catch (error) {
    quoteText.innerText = "Be the change you wish to see in the world.";
    authorText.innerText = "- Mahatma Gandhi";
  }
}

getNewQuote();

// Quick Links
const links = [
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Chai aur Code", url: "https://youtube.com/@chaiaurcode" },
];
const linksContainer = document.getElementById("links-card");

links.forEach((link) => {
  const button = document.createElement("button");
  button.innerText = link.name;
  button.className = "link-btn";
  button.onclick = () => window.open(link.url, "_blank");
  linksContainer.appendChild(button);
});

// Focus Note Functions
const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveNote");
const noteDisplay = document.getElementById("noteDisplay");

// Load saved note
const savedNote = localStorage.getItem("userNote");
if (savedNote) {
  noteDisplay.innerText = savedNote;
}

// Save note
saveBtn.onclick = () => {
  const text = noteInput.value;
  if (text) {
    localStorage.setItem("userNote", text);
    noteDisplay.innerText = text;
    noteInput.value = "";
  }
};

// Todo List Management
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

function renderTasks() {
  todoList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span class="task-text ${task.completed ? "completed" : ""}">${task.text}</span>
            <div>
                <button class="action-btn complete-btn" onclick="toggleTask(${index})">✓</button>
                <button class="action-btn delete-btn" onclick="deleteTask(${index})">✗</button>
            </div>
        `;
    todoList.appendChild(li);
  });

  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// Add Task
addTodoBtn.onclick = () => {
  if (todoInput.value.trim()) {
    tasks.push({ text: todoInput.value.trim(), completed: false });
    todoInput.value = "";
    renderTasks();
  }
};

// Delete Task
window.deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

// Toggle Task
window.toggleTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
};

renderTasks();

// ============================================
// Enhanced Weather App with More Details
// ============================================

const showDiv = document.getElementById("show");
const searchBtn = document.getElementById("search");
const cityInput = document.getElementById("city");
const locationBtn = document.getElementById("locationBtn");

// Get additional weather detail elements
const humiditySpan = document.getElementById("humidity");
const pressureSpan = document.getElementById("pressure");
const windSpan = document.getElementById("wind");
const sunriseSpan = document.getElementById("sunrise");
const sunsetSpan = document.getElementById("sunset");
const visibilitySpan = document.getElementById("visibility");
const aqiSpan = document.getElementById("aqi");

// OpenWeatherMap API Key
const apiKey = "2f745fa85d563da5adb87b6cd4b81caf";

// Function to convert Unix timestamp to time string
function convertUnixToTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + " " + ampm;
}

// Function to get weather data
async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || "City not found");
  }
}

// Function to display weather information
async function displayWeather(data) {
  // Main weather display
  showDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${Math.round(data.main.temp)}°C</h1>
        <div class="temp_container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${Math.round(data.main.temp_min)}°</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${Math.round(data.main.temp_max)}°</h4>
            </div>
        </div>
    `;

  // Additional details
  humiditySpan.innerText = `${data.main.humidity}%`;
  pressureSpan.innerText = `${data.main.pressure} hPa`;
  windSpan.innerText = `${data.wind.speed} m/s`;
  sunriseSpan.innerText = convertUnixToTime(data.sys.sunrise);
  sunsetSpan.innerText = convertUnixToTime(data.sys.sunset);
  visibilitySpan.innerText = `${(data.visibility / 1000).toFixed(1)} km`;

  // Fetch Air Quality (AQI) using OpenWeather Air Pollution API and convert PM2.5 to US-AQI
  try {
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const aqiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const aqiResp = await fetch(aqiUrl);
    const aqiData = await aqiResp.json();

    if (aqiResp.ok && aqiData.list && aqiData.list.length > 0) {
      const components = aqiData.list[0].components || {};
      const pm25 =
        components.pm2_5 != null ? Number(components.pm2_5.toFixed(1)) : null;

      function pm25ToAqi(pm) {
        if (pm === null || isNaN(pm)) return null;
        const breaks = [
          { cLow: 0.0, cHigh: 12.0, aqiLow: 0, aqiHigh: 50 },
          { cLow: 12.1, cHigh: 35.4, aqiLow: 51, aqiHigh: 100 },
          { cLow: 35.5, cHigh: 55.4, aqiLow: 101, aqiHigh: 150 },
          { cLow: 55.5, cHigh: 150.4, aqiLow: 151, aqiHigh: 200 },
          { cLow: 150.5, cHigh: 250.4, aqiLow: 201, aqiHigh: 300 },
          { cLow: 250.5, cHigh: 350.4, aqiLow: 301, aqiHigh: 400 },
          { cLow: 350.5, cHigh: 500.4, aqiLow: 401, aqiHigh: 500 },
        ];

        for (const b of breaks) {
          if (pm >= b.cLow && pm <= b.cHigh) {
            return Math.round(
              ((b.aqiHigh - b.aqiLow) / (b.cHigh - b.cLow)) * (pm - b.cLow) +
                b.aqiLow,
            );
          }
        }
        return null;
      }

      const usAqi = pm25 != null ? pm25ToAqi(pm25) : null;

      function aqiCategory(aqi) {
        if (aqi == null) return "N/A";
        if (aqi <= 50) return "Good";
        if (aqi <= 100) return "Moderate";
        if (aqi <= 150) return "Unhealthy for Sensitive";
        if (aqi <= 200) return "Unhealthy";
        if (aqi <= 300) return "Very Unhealthy";
        return "Hazardous";
      }

      if (usAqi != null) {
        aqiSpan.innerText = `${usAqi} (${aqiCategory(usAqi)})`;
        if (pm25 != null) aqiSpan.title = `PM2.5: ${pm25} µg/m³`;
      } else {
        // fallback to OpenWeather index
        const openAqi = aqiData.list[0].main.aqi;
        const openMap = {
          1: "Good",
          2: "Fair",
          3: "Moderate",
          4: "Poor",
          5: "Very Poor",
        };
        aqiSpan.innerText = `${openMap[openAqi] || "N/A"} (${openAqi})`;
      }
    } else {
      aqiSpan.innerText = "N/A";
    }
  } catch (err) {
    aqiSpan.innerText = "N/A";
  }
}

// Main getWeather function
async function getWeather() {
  const cityValue = cityInput.value.trim();

  if (cityValue.length === 0) {
    showDiv.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
    return;
  }

  try {
    const data = await getWeatherData(cityValue);
    await displayWeather(data);
  } catch (error) {
    showDiv.innerHTML = `<h3 class="error">${error.message}</h3>`;
  }
}

// Location button - get weather by GPS
locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Get city name from coordinates using reverse geocoding
        const geoUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

        try {
          const geoResponse = await fetch(geoUrl);
          const geoData = await geoResponse.json();

          if (geoData.length > 0) {
            const cityName = geoData[0].name;
            cityInput.value = cityName;
            getWeather();
          }
        } catch (error) {
          showDiv.innerHTML = `<h3 class="error">Could not get location</h3>`;
        }
      },
      (error) => {
        alert("Unable to get your location. Please enable location access.");
      },
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

// Search button click
searchBtn.addEventListener("click", getWeather);

// Allow pressing Enter to search
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});

// Load default city weather on page load
window.addEventListener("load", () => {
  cityInput.value = "Delhi";
  getWeather();
});
