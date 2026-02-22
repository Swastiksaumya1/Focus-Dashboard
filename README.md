# Focus Dashboard

Minimal personal productivity dashboard with clock, weather (including AQI), quick links, notes and todos.

## Features
- Live clock and greeting
- Weather search + use my location
- Weather details: temperature, min/max, humidity, pressure, wind, sunrise/sunset, visibility
- Air Quality: PM2.5 → numeric US-AQI conversion with category and PM2.5 tooltip
- Quote, focus note (saved to `localStorage`), quick links, and todo list

## Setup & Usage
1. Clone the repo or download the folder.
2. Open `praactice/FocusDashboard/index.html` in a modern browser.
3. The app loads a default city (`Delhi`) on page load. You can search another city or click the location button and allow geolocation.

### API key
This project uses the OpenWeather APIs and requires an API key. A key is currently set in `script.js` (variable `apiKey`). For production, remove the key from source and inject it via a build step or environment.

## Files
- `index.html` — main UI
- `style.css` — styles
- `script.js` — app logic (weather, AQI, todos, notes)

## Notes & Improvements
- AQI is calculated from OpenWeather's air pollution `pm2_5` value to produce a US-AQI number (EPA breakpoints). If `pm2_5` is unavailable, the OpenWeather 1–5 index is shown as fallback.
- Consider styling AQI with color-coded badges and adding brief health recommendations per category.

## Contributing
Feel free to open issues or create PRs. For small UI tweaks or adding features (e.g., color-coded AQI), I can implement and push them.

## License
MIT
