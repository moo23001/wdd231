  //Get data from localstorage
  function getCartData() {
    return JSON.parse(localStorage.getItem('cartRequests')) || [];
  }

  console.log(getCartData());
  displayOrder(getCartData());

function displayOrder (order) {
    const orderInfo = document.createElement('section');
        orderInfo.innerHTML = `
        <p><strong>Order number: </strong>${order[0]}</p>
        <p>Order date: ${order[1]}</p>
        
        `;

    const orderTable = document.createElement('table');

        orderTable.innerHTML = `
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Item Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>

        `
         
        for (let i = 2; i < order.length; i++) {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
            <td>${order[i].name}</td>
            <td>${order[i].price}</td>
            <td>${order[i].name}</td>
            <td>${order[i].total.toFixed(2)}</td>
            `
           
            orderTable.appendChild(tableRow);
        }
        orderInfo.appendChild(orderTable);





    document.querySelector('.thankyou').appendChild(orderInfo);
}
