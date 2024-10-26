let formAnswers = getFormAnswers() || [];
const postReviewButton = document.getElementById('sendRequest');
postReviewButton.addEventListener('click', () => {
    //Get values from from 
    const contactName = document.getElementById('fullName').value
    const contactEmail = document.getElementById('email').value;
    const contactRequest = document.getElementById('request').value;
    const requestDate = new Date();

    //Store values in array as objects (key: data)
    const formData = {
        contactName: contactName,
        contactEmail: contactEmail,
        contactRequest: contactRequest,
        requestDate: requestDate
    }
    //Store in localstorage
    setFormAnswers(formData);
    //console.log(formData)
  }
)


//Set data in local storage
function setFormAnswers (formData) {
  formAnswers.push(formData)
  localStorage.setItem('formRequests', JSON.stringify(formAnswers));
  
  //console.log(formAnswers)
}
//Get data from localstorage
function getFormAnswers() {
  return JSON.parse(localStorage.getItem('formRequests')) || [];
}

