const currentUrl = window.location.href;
const urlAll = currentUrl.split('?');
let formData = urlAll[1].split('&');

function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40","@").replace(/\+/g," ").replace(/\%3A/g,":").replace(/\%28/g,"").replace(/\%29/g,"");
            
        }
    })
    return (result);
}

const showInfo = document.querySelector('.thankYou');
showInfo.innerHTML = `
<h1>Thank you for joining</h1>
<h3>New Member</h3>
<p>Name: <strong>${show("first")} ${show("last")}</strong></p>
<p>Phone: <strong>${show("phone")}</strong></p>
<p>Email: <strong>${show("email")}</strong></p>
<p>Business/Org name: <strong>${show("business")}</strong></p>
<p>${show("timeStamp")}</p>

`;