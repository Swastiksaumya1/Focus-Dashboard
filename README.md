<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Focus Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <!-- Ion Icons for weather search icon -->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</head>
<body>
    <div class="dashboard">
        <!-- Header Section -->
        <header class="header">
            <h1 id="greeting">Good Morning!</h1>
            <p class="date" id="currentDate">Loading date...</p>
        </header>

        <!-- Top Row: Clock and Weather -->
        <div class="top-row">
            <!-- Clock Card -->
            <div class="card clock-card">
                <div class="card-icon">⏰</div>
                <h2 id="clock">00:00:00 AM</h2>
                <p class="card-label">Current Time</p>
            </div>

            <!-- Weather Card -->
            <div class="card weather-card">
                <div class="search-box">
                    <input type="text" id="city" placeholder="Enter city name" value="Delhi" autocomplete="off">
                    <button id="search" title="Search">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                    <button id="locationBtn" title="Use My Location">
                        <ion-icon name="locate-outline"></ion-icon>
                    </button>
                </div>
                <div id="show"></div>
                <!-- Additional Weather Details -->
                <div id="weather-details" class="weather-details">
                    <div class="detail-item">
                        <ion-icon name="water"></ion-icon>
                        <span id="humidity">--</span>
                        <label>Humidity</label>
                    </div>
                    <div class="detail-item">
                        <ion-icon name="speedometer"></ion-icon>
                        <span id="pressure">--</span>
                        <label>Pressure</label>
                    </div>
                    <div class="detail-item">
                        <ion-icon name="flag"></ion-icon>
                        <span id="wind">--</span>
                        <label>Wind</label>
                    </div>
                    <div class="detail-item">
                        <ion-icon name="sunny"></ion-icon>
                        <span id="sunrise">--</span>
                        <label>Sunrise</label>
                    </div>
                    <div class="detail-item">
                        <ion-icon name="moon"></ion-icon>
                        <span id="sunset">--</span>
                        <label>Sunset</label>
                    </div>
                    <div class="detail-item">
                        <ion-icon name="eye"></ion-icon>
                        <span id="visibility">--</span>
                        <label>Visibility</label>
                    </div>
                    <div class="detail-item">
                        <ion-icon name="pulse"></ion-icon>
                        <span id="aqi">--</span>
                        <label>Air Quality</label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Middle Row: Quote and Focus -->
        <div class="middle-row">
            <!-- Quote Card -->
            <div class="card quote-card">
                <div class="card-icon">💭</div>
                <p id="quote">Fetching inspiration...</p>
                <span id="author"></span>
            </div>

            <!-- Focus Card -->
            <div class="card focus-card">
                <div class="card-icon">🎯</div>
                <h3>Current Focus</h3>
                <input type="text" id="noteInput" placeholder="What is your focus?">
                <button id="saveNote">Save</button>
                <p id="noteDisplay"></p>
            </div>
        </div>

        <!-- Bottom Row: Links and Tasks -->
        <div class="bottom-row">
            <!-- Quick Links Card -->
            <div class="card links-card">
                <div class="card-icon">🔗</div>
                <h3>Quick Links</h3>
                <div id="links-card" class="links-container"></div>
            </div>

            <!-- Tasks Card -->
            <div class="card tasks-card">
                <div class="card-icon">✅</div>
                <h3>Daily Tasks</h3>
                <div class="todo-input-group">
                    <input type="text" id="todoInput" placeholder="Add a new task...">
                    <button id="addTodo">Add</button>
                </div>
                <ul id="todoList"></ul>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
