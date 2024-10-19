const url = './data/monterrey_investor_info.json';
const cards = document.querySelector('.infoColumn');
let userDates = getDates() || [];
getDates();


async function getCityData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCityInfo(data);
        } else {
            console.error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Fetch error: ${error}`);
    }
}
getCityData();

const displayCityInfo = (cityData) => {
    const cityName = document.createElement('h2');
    const cityPopulation = document.createElement('p');
    const cityGdpAmount = document.createElement('p');
    const cityGdpRate = document.createElement('p');

    cityName.innerHTML = cityData.city;
    cityPopulation.innerHTML = `<strong>Population:</strong> ${cityData.population.toLocaleString()}`;
    cityGdpAmount.innerHTML = `<strong>City's GDP:</strong> ${cityData.gdp.amount}`;
    cityGdpRate.innerHTML = `<strong>Growth Rate:</strong> ${cityData.gdp.growth_rate}`;
    
    const cityCard = document.createElement('section');

    cityCard.appendChild(cityName);
    cityCard.appendChild(cityPopulation);
    cityCard.appendChild(cityGdpAmount);
    cityCard.appendChild(cityGdpRate);
    cityCard.classList.add('cityCard')
    cards.appendChild(cityCard);

    cityData.sectors.forEach(element => {
        const sectorCard = document.createElement('section');
        const keyCompanies = document.createElement('ul');
        element.key_companies.forEach(company => {
            const item = document.createElement('li');
            item.innerHTML= company;
            keyCompanies.appendChild(item);
                      
        })


        sectorCard.innerHTML = `
        <h2>${element.sector}</h2>
        <p>${element.description}</p>
        <p><strong>Key Companies:</strong></p>
        
        `
        sectorCard.appendChild(keyCompanies);
        sectorCard.classList.add('cityCard');
        cards.appendChild(sectorCard);
    });

}

const theDateToday = new Date();
if (userDates[0] == null) {
    userDates[0] = theDateToday;
    userDates[1] = Math.floor((Date.now() - theDateToday.getTime()) / (1000 * 60 * 60 * 24));
    userDates[2] = "Welcome! Let us know if you have any questions.";
} else if (userDates[1] < 1 ) {
    userDates[2] = "Back so soon! Awesome!"
} else {
    userDates[2] = `You last visited ${userDates[1]} days ago`;
}

function setDates (userDatesData) {
    
    localStorage.setItem('userDatesLocal', JSON.stringify(userDatesData));
    
  }

  //Get data from localstorage
function getDates() {
    return JSON.parse(localStorage.getItem('userDatesLocal')) || [];
  }
  setDates(userDates);
const alert = document.querySelector('.alert');
const message = document.createElement('p');
message.innerHTML = userDates[2];
alert.appendChild(message);