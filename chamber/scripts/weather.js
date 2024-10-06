const urlWeather = 'https://api.openweathermap.org/data/2.5/forecast?lat=25.64259225444005&lon=-100.27718950800647&units=metric&appid=07b80f8d17c86fe77011c3973c68d381';

//DOM elements selected in the HTML
const wCard = document.querySelector('#weather');
const fCard = document.querySelector('#forecast');

//Get data from API
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

//Call the async function
getWeatherData();

//Display weather info
const displayWeather = (weather) => {
    //Create DOM elements
    let temperature = document.createElement('p');
    let description = document.createElement('p');
    let weatherImg = document.createElement('img');
    let weatherImgSrc = `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`;

    //Assign data to elements
    temperature.innerHTML = `${Math.round(weather.list[0].main.temp)}&#8451`;
    description.innerHTML = weather.list[0].weather[0].description[0].toUpperCase()+weather.list[0].weather[0].description.substring(1);
    weatherImg.setAttribute('src',weatherImgSrc);
    weatherImg.setAttribute('alt',weather.list[0].weather[0].description);
    weatherImg.setAttribute('loading', 'lazy');
    temperature.classList.add('temp')

    //Append to weather card
    wCard.appendChild(temperature);
    wCard.appendChild(weatherImg);
    wCard.appendChild(description);

    //Create the weather forecast days
    let forecastIndex = 0;
    for (let i = 0; i < 3; i++) {
        //forecastIndex increases by 8 because in the API data we have increments of 3 hours by 5 days.
        forecastIndex += 8;

        //Get date information from API data
        const todayInfo = getDayInfo(new Date(weather.list[forecastIndex].dt_txt));
        const forecastTemp = `${Math.round(weather.list[forecastIndex].main.temp)}&#8451`;
        const forecastImg = `https://openweathermap.org/img/wn/${weather.list[forecastIndex].weather[0].icon}.png`;
        const forecastDescription = weather.list[forecastIndex].weather[0].description[0].toUpperCase()+weather.list[forecastIndex].weather[0].description.substring(1);

        //Create the DOM elements
        let forecastCardItemTemp = document.createElement('p');
        let forecastCardItemImg = document.createElement('img');
        let forecastCardItemDes = document.createElement('p');
        let forecastCardItemDay = document.createElement('p');
        
        //Assigne data to the DOM elements
        forecastCardItemDay.textContent = todayInfo.dayName;
        forecastCardItemTemp.innerHTML = forecastTemp;
        forecastCardItemImg.setAttribute('src',forecastImg);
        forecastCardItemImg.setAttribute('alt',forecastDescription);
        forecastCardItemImg.setAttribute('loading','lazy');
        forecastCardItemDes.innerHTML = forecastDescription;

        //Create DOM element to group the card
        let forecastCard = document.createElement('div');

        //Append to Card 
        forecastCard.appendChild(forecastCardItemDay);
        forecastCard.appendChild(forecastCardItemTemp);
        forecastCard.appendChild(forecastCardItemImg);
        forecastCard.appendChild(forecastCardItemDes);
        forecastCard.classList.add('fCard');

        //Append forecastCard to main container
        fCard.appendChild(forecastCard);
    }
    


}
//Function used to get the day number from a UTC date
function getDayInfo(date = new Date()) {
    // Array of days of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the day of the week as a number (0-6)
    const dayOfWeekNumber = date.getDay();
    
    // Get the name of the day
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    
    // Return the day name
    return {
        dayName: dayOfWeekName,
    };
}
