const products = [
    {
        productName: "Kuromi notebook",
        productPrice: 9.99,
        productDescription: "Notebook with Kuromi design. Price is for ONE notebook.",
        productImg: "images/p1_480x480.webp",
        productPromo: true
    },
    {
        productName: "Ana Thinking candy",
        productPrice: 1.99,
        productDescription: "Dry fruit or nuts. A delicious and healthy snack.",
        productImg: "images/p2_480x480.webp"
    },
    {
        productName: "Assorted notebooks",
        productPrice: 19.99,
        productDescription: "Kuromi or Cinammonroll notebook. Big ring binders. Pack of 4.",
        productImg: "images/p3_480x480.webp"
    },
    {
        productName: "Kuromi notebook",
        productPrice: 8.99,
        productDescription: "Single Kuromi notebook. Big ring binders.",
        productImg: "images/p4_480x480.webp"
    },
    {
        productName: "Cinnamonroll notebook",
        productPrice: 8.99,
        productDescription: "Single Cinnamonroll notebook. Big ring binders.",
        productImg: "images/p5_480x480.webp"
    },
    {
        productName: "Mistery Gift Box",
        productPrice: 16.99,
        productDescription: "Contains several products on the list and more. Great for gift giving.",
        productImg: "images/p6_1280x720.webp"
    },
    {
        productName: "Hello Kitty Friends Box",
        productPrice: 19.99,
        productDescription: "Hello Kitty Friends Box. Use it to store all your favorite Hello kitty items",
        productImg: "images/p7_480x480.webp"
    },
    {
        productName: "Hello Kitty Pack",
        productPrice: 19.99,
        productDescription: "Hello Kitty notebook, pen, magic box, eraser, and pin",
        productImg: "images/p8_480x480.webp"
    },
    {
        productName: "Hello Kitty notebook",
        productPrice: 19.99,
        productDescription: "Single Cinnamonroll notebook.",
        productImg: "images/p9_480x480.webp"
    },
    {
        productName: "Two Mystery Gift Boxes",
        productPrice: 25.49,
        productDescription: "Two Ana Thinking Mystery Gift Boxes. Use code: 50off.",
        productImg: "images/p10_1280x720.webp"
    },
];

productCards(products);

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