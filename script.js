const apiKey = "0a97bd58ac6913a45a754792cd978e57";

let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let percentage = document.querySelector(".percentage");
let speed = document.querySelector(".speed");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let img = document.querySelector(".imgSection img");
let text;

btn.addEventListener("click", async () => {
    text = input.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apiKey}`; // dynamically update API URL with user input

    let data;

    // fetching the data from the api
    const checkWeather = async () => {
        try {
            const response = await fetch(apiUrl);
            data = await response.json();
            console.log("Weather condition:", data.weather[0].main);
            displayData();
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const displayData = () => {
        if (data) {
            city.innerHTML = data.name;
            temp.innerHTML = Math.round(data.main.temp) + " °C";
            percentage.innerHTML = data.main.humidity + "%";
            speed.innerHTML = data.wind.speed + " km/hr";

            // Set the weather icon based on weather conditions
            if (data.weather[0].main == "Clear") {
                console.log("Setting clear icon");
                img.src = "./clear.png";
            } else if (data.weather[0].main == "Clouds") {
                console.log("Setting clouds icon");
                img.src = "clouds.png";
            } else if (data.weather[0].main == "Drizzle") {
                console.log("Setting drizzle icon");
                img.src = "drizzle.png";
            } else if (data.weather[0].main == "Rain") {
                console.log("Setting rain icon");
                img.src = "rain.png";
            }
            else if (data.weather[0].main == "Mist") {
                console.log("Setting rain icon");
                img.src = "mist.png";
            }
            else if (data.weather[0].main == "Snow") {
                console.log("Setting rain icon");
                img.src = "snow.png";
            }
        } else {
            console.log("Cannot access the data");
        }
    };

    checkWeather();
});
