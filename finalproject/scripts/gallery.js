const url = './data/products.json';

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

    //Give attributes Order Now button
    orderNowButton.setAttribute("href", "contactus.html");
    orderNowButton.textContent = "Order Now"
    orderNowButton.classList.add("orderNow");


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