  //Get data from localstorage
  function getCartData() {
    return JSON.parse(localStorage.getItem('cartRequests')) || [];
  }

  console.log(getCartData);

