const url = './data/monterrey_investor_info.json';
const cards = document.querySelector('.infoColumn');


async function getCityData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
    cityPopulation.innerHTML = `Population: ${cityData.population}`;
    cityGdpAmount.innerHTML = `City's GDP: ${cityData.gdp.amount}`;
    cityGdpRate.innerHTML = `Growth Rate: ${cityData.gdp.growth_rate}`;
    


    const cityCard = document.createElement('section');

    cityCard.appendChild(cityName);
    cityCard.appendChild(cityPopulation);
    cityCard.appendChild(cityGdpAmount);
    cityCard.appendChild(cityGdpRate);
    cityCard.classList.add('cityCard')

    cards.appendChild(cityCard);
    



}