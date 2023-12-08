btnAddProduct = document.querySelector("#btnAddProduct");

//Tried using this para sa converting into base64
/*productImage.addEventListener('change', event => {
    // 👇️ Save the image to localStorage
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
        let url = reader.result;    
    });


});*/

btnAddProduct.onclick = () => {
    let productName = document.querySelector("#txtProductName").value,
    description = document.querySelector("#txtDescription").value,
    price = document.querySelector("#txtPrice").value,
    productImage = document.querySelector("#imgProductImage").value;;


    addProduct(productName, description, price, productImage);
};

function addProduct(productName, description, price, productImage){
    let cardParent = document.querySelector("#card-parent");

    if (!productName) return alert(`Product Name is required.`);
    else if (!description) return alert(`Description is required`);
    else if (!price) return alert(`Price is required.`);
    else if (!productImage) return alert(`Product Image`);

    let productToCreate = {
        productName,
        description,
        price,
        productImage,
    };
    
    let products = localStorage.getItem("products");
    if (!products) {
        products = [productToCreate]; // First product na mareregister
    } else {
        products = JSON.parse(products);
        products.push(productToCreate);
    }
    
    // Success validation
    localStorage.setItem("products", JSON.stringify(products));
    alert(`Product ${productToCreate.productName} has been successfully created.`); // alert("Product " + userToCreate.name + " has been successfully created.");

    let card = document.createElement("div");
    card.style.width = "350px";
    card.className = "card m-2";

    let img = document.createElement("img");
    img.src = productImage;
    img.className = "card-img-top";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let title = document.createElement("h5");
    title.className = "card-title";
    title.innerHTML = productName;

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = description;

    let cardFooter = document.createElement("div");
    cardFooter.className = "card-footer d-flex justify-content-between";

    let priceDiv = document.createElement("div");
    priceDiv.className = "d-flex gap-1";

    let priceText = document.createElement("p");
    priceText.className = "my-auto";
    priceText.innerHTML = "Price:"

    let priceValue = document.createElement("button");
    priceValue.type = "button";
    priceValue.className = "btn btn-dark";
    priceValue.innerHTML = `₱ ${price}`;

    let buttonDiv = document.createElement("div");
    buttonDiv.className = "d-flex";

    let btnAddToCart = document.createElement("btn");
    btnAddToCart.type = "button";
    btnAddToCart.className = "btn btn-outline-success fs-6 addToCart";
    btnAddToCart.style.marginRight = ".5vh";
    btnAddToCart.style.marginLeft = ".5vh";
    btnAddToCart.innerHTML = "Add to cart";

    let btnHeart = document.createElement("btn");
    btnHeart.type = "button";
    btnHeart.className = "btn btn-outline-primary";
    btnHeart.style.paddingLeft = "2vh";
    btnHeart.style.paddingRight = "2vh";

    let svg = document.createElement("svg");
    svg.xlmns = "http://www.w3.org/2000/svg";
    svg.height = ".8em";
    svg.viewBox = "0 0 512 512";
    
    let style = document.createElement("style");
    style.innerHTML = "svg{fill:#005eff}";

    let path = document.createElement("path");
    path.d = "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z";
    
    btnHeart.appendChild(svg);
    btnHeart.appendChild(style);
    btnHeart.appendChild(path);

    buttonDiv.appendChild(btnAddToCart);
    buttonDiv.appendChild(btnHeart);

    priceDiv.appendChild(priceText);
    priceDiv.appendChild(priceValue);

    cardFooter.appendChild(priceDiv);
    cardFooter.appendChild(buttonDiv);

    cardBody.appendChild(title);
    cardBody.appendChild(cardText);

    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    cardParent.appendChild(card);
}
