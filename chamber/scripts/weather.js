const urlWeather = 'https://api.openweathermap.org/data/2.5/forecast?lat=25.64259225444005&lon=-100.27718950800647&units=metric&appid=07b80f8d17c86fe77011c3973c68d381';
const wCard = document.querySelector('#weather');
const fCard = document.querySelector('#forecast');


async function getWeatherData() {
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data)
        } else {
            console.error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Fetch error: ${error}`);
    }
}

getWeatherData();

const displayWeather = (weather) => {
    let temperature = document.createElement('p');
    let weatherImg = document.createElement('img');
    let weatherImgSrc = `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`;
    temperature.innerHTML = `${Math.round(weather.list[0].main.temp)}&#8451`;
    weatherImg.setAttribute('src',weatherImgSrc);
    
    wCard.appendChild(weatherImg);
    wCard.appendChild(temperature);
}