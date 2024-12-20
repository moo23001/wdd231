const url = './data/members.json';
const cards = document.querySelector('.spotlight');


async function getMemberData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            /*console.log(data);*/
            let rdata = [];
            data.forEach (member => {
                if (member.membershipLevel > 2){
                    rdata.push(member);
                }
            })

            shuffleArray(rdata);
            displayMembers(rdata);
        } else {
            console.error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Fetch error: ${error}`);
    }
}
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const displayMembers = (members) => {
    members.forEach(member => {
        
            let card = document.createElement('section');
            let memberName = document.createElement('h3');
            let logo = document.createElement('img');
            let yearFounded = document.createElement('p');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let webAddress = document.createElement('a');
    
            memberName.textContent = `${member.name}`;
            yearFounded.textContent = `Year founded: ${member.otherInfo.yearFounded}`;
            address.textContent = `${member.address}`;
            phone.textContent = `${member.phone}`;
            webAddress.textContent = `${member.website}`;
    
            webAddress.setAttribute('href',member.website);
    
            logo.setAttribute('src', member.logoUrl);
            logo.setAttribute('alt', `logo of ${member.image}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', 'auto');
            logo.setAttribute('height', 'auto');
            logo.classList.add('memberLogo');

            card.classList.add('spotlightCard')
    
            card.appendChild(memberName);
            card.appendChild(logo);
            card.appendChild(phone);
            card.appendChild(webAddress);
    
            cards.appendChild(card);
        
       
    });
  }
  getMemberData();


 

  