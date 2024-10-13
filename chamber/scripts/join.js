const url = './data/membership_benefits.json';
const cards = document.querySelector('#membershipCards');



async function getMembershipData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayMembershipCards(data);
        } else {
            console.error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Fetch error: ${error}`);
    }
}

getMembershipData();

function displayMembershipCards (membership) {

    membership.map((section) => {
        const mCard = document.createElement('section');
        mCard.innerHTML = `
        <h3>${section.name}</h3>
        <p>Learn More<p>
    `;
    mCard.classList.add('membershipCard')
    cards.appendChild(mCard);
    mCard.addEventListener("click", () => displayModal(section));
    console.log(mCard)
    })
}

function displayModal (membership) {
    const learnMore = document.querySelector('.learnMore');
    const closeButton = document.createElement('button');
    const benefitsList = document.createElement('ul');


    learnMore.innerHTML = '';
    benefitsList.innerHTML = '';
    closeButton.textContent = '❌';
    const benefits = membership.benefits.map(benefit => `<li>${benefit}</li>`).join('');
    benefitsList.innerHTML = `<ul>${benefits}</ul>`;

    learnMore.appendChild(closeButton);
    learnMore.appendChild(benefitsList);
    
    learnMore.showModal();

    closeButton.addEventListener("click", () => {
        learnMore.close();
    })

}

const currentDateTime = new Date();
document.querySelector('#timeStamp').value = currentDateTime;
