const url = './data/members.json';
const cards = document.querySelector('.cards');


async function getMemberData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            /*console.log(data);*/
            displayMembers(data);
        } else {
            console.error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Fetch error: ${error}`);
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

        card.appendChild(logo);
        card.appendChild(memberName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(webAddress);

        cards.appendChild(card);
    });
  }
  getMemberData();

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector(".cards");
  
   
  gridbutton.addEventListener("click", () => {
      display.classList.add("grid");
      display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
  });

 

  