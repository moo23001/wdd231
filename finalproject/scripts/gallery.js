const url = './data/products.json';
let cart = [];

async function getProductData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            productCards(data);
        } else {
            console.error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Fetch error: ${error}`);
    }
}

getProductData();

function productCards(filteredProductArray) {
	document.querySelector(".galleryContainer").innerHTML = "";


	filteredProductArray.map((product) => {
	//Create the temple card elements
	const pCard = document.createElement("div");
	pCard.classList = 'card';
	const productCardName = document.createElement('h3');
	const productCardPrice = document.createElement('p');
	const productCardDescription = document.createElement('p');
	const productCardImg = document.createElement('img');
    const orderNowButton = document.createElement('a')
	
	//Give attirbutes to img. Lazy loading here
	productCardImg.setAttribute("src", product.productImg)
	productCardImg.setAttribute("alt", `${product.productName}`)
	productCardImg.setAttribute("loading", "lazy")
    productCardImg.setAttribute("width",300);
    productCardImg.setAttribute("height",300)

    //Give attributes Order Now button
    //*orderNowButton.setAttribute("href", "contactus.html");
    orderNowButton.textContent = "Order Now"
    orderNowButton.classList.add("orderNow");
    orderNowButton.addEventListener("click", () => addToCart(product.productName, product.productPrice));


	//Assign content
	productCardName.innerHTML = `${product.productName}`;
	productCardPrice.innerHTML = `Price: $ ${product.productPrice}`;
	productCardDescription.innerHTML = `Description: ${product.productDescription}`;
	productCardImg.innerHTML = product.productImg;
	
	//Append child elements to temple card
    pCard.appendChild(productCardImg);
	pCard.appendChild(productCardName);
	pCard.appendChild(productCardPrice);
	pCard.appendChild(productCardDescription);
    pCard.appendChild(orderNowButton);

    
	const productCardsFinal = document.querySelector('.galleryContainer');
	productCardsFinal.appendChild(pCard);

	})


}

function addToCart(itemName, itemPrice) {
    const quantity = parseInt(prompt(`Enter quantity for ${itemName}:`), 10);
    if (!quantity || quantity <= 0) return; // Exit if quantity is invalid

    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: quantity });
        console.log(cart);
    }

    if (confirm("Item added to cart. Continue shopping?")) {
        return;
    } else {
        displayUpdatedCart();
    }
}

function displayUpdatedCart (){
    const cartDialog = document.querySelector(".cart");
    const closeButton = document.createElement('button');
    const gTotal = document.createElement('p');
    

    cartDialog.innerHTML = "";
    closeButton.textContent = '❌';
    cartDialog.appendChild(closeButton);
    
    closeButton.addEventListener("click", () => {
        cartDialog.close()
    })

    let grandTotal = 0;
    cart.forEach(item => {
        const total = item.price * item.quantity;
        grandTotal += total;
        cartDialog.innerHTML += `
        <p>${item.name} - $${item.price} x ${item.quantity} = $${total}</p>`;

    });
    gTotal.innerHTML = `Grant Total <strong>${grandTotal}</strong>`;
    cartDialog.appendChild(gTotal);

    cartDialog.showModal();

}