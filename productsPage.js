let productsPage = document.addEventListener("load", getProducts());

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

    let btnDelete = document.createElement("btn");
    btnDelete.type = "button";
    btnDelete.className = "btn btn-outline-danger";
    btnDelete.style.paddingLeft = "2vh";
    btnDelete.style.paddingRight = "2vh";

    let image = document.createElement("img");
    image.src = "deleteIcon.png";
    image.height = "20";
    
    btnDelete.appendChild(image);

    buttonDiv.appendChild(btnAddToCart);
    buttonDiv.appendChild(btnDelete);

    priceDiv.appendChild(priceText);
    priceDiv.appendChild(priceValue);

    cardFooter.appendChild(priceDiv);
    cardFooter.appendChild(buttonDiv);

    cardBody.appendChild(title);

    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    cardParent.appendChild(card);

    location.reload();
    
}

function getProducts() {
    let products = JSON.parse(localStorage.getItem("products"));

    if (!products) {
        let screen = document.querySelector(".screen");

        let empty = document.createElement("div");
        empty.className = "d-flex justify-content-center";

        let h1 = document.createElement("h1");
        h1.innerHTML = "Empty Product List";

        empty.appendChild(h1);
        screen.appendChild(empty);
    } else {
        for (let index = 0; index < products.length; index++) {
            console.log(`This is iteration ${index}`);
            let cardParent = document.querySelector("#card-parent");
    
            let card = document.createElement("div");
            card.style.width = "350px";
            card.className = "card m-2";
            card.id = `${index}`;
            card.setAttribute("onclick", `showInfo(${index})`);
            card.setAttribute("data-bs-toggle", "modal");
            card.setAttribute("data-bs-target", "#infoModal");
    
            let img = document.createElement("img");
            img.src = products[index].productImage;
            img.className = "card-img-top";
    
            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
    
            let title = document.createElement("h5");
            title.className = "card-title";
            title.innerHTML = products[index].productName;
    
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
            priceValue.innerHTML = `₱ ${products[index].price}`;
    
            let buttonDiv = document.createElement("div");
            buttonDiv.className = "d-flex";
    
            let btnAddToCart = document.createElement("btn");
            btnAddToCart.type = "button";
            btnAddToCart.className = "btn btn-outline-success fs-6 addToCart";
            btnAddToCart.style.marginRight = ".5vh";
            btnAddToCart.style.marginLeft = ".5vh";
            btnAddToCart.innerHTML = "Add to cart";
    
            let btnDelete = document.createElement("btn");
            btnDelete.type = "button";
            btnDelete.className = "btn btn-outline-danger";
            btnDelete.setAttribute("onclick", `deleteProduct(${index})`);
            btnDelete.setAttribute("id", `${index}`);
            btnDelete.style.paddingLeft = "2vh";
            btnDelete.style.paddingRight = "2vh";
        
            let image = document.createElement("img");
            image.src = "deleteIcon.png";
            image.height = "20";
            
            btnDelete.appendChild(image);
        
            buttonDiv.appendChild(btnAddToCart);
            buttonDiv.appendChild(btnDelete);
    
            priceDiv.appendChild(priceText);
            priceDiv.appendChild(priceValue);
    
            cardFooter.appendChild(priceDiv);
            cardFooter.appendChild(buttonDiv);
    
            cardBody.appendChild(title);
    
            card.appendChild(img);
            card.appendChild(cardBody);
            card.appendChild(cardFooter);
    
            cardParent.appendChild(card);

            //btnDelete = document.querySelector(`#id${index}`);
        }
    }

    //location.reload();
}

function deleteProduct(index) {
    console.log(`removing index ${index}`)

    let products = localStorage.getItem("products");
    
    products = JSON.parse(products);

    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product has been deleted");

    location.reload();
}

function showInfo(index){
    let products = JSON.parse(localStorage.getItem("products")),
    name = products[index].productName,
    description = products[index].description,
    price = products[index].price,
    img = products[index].src;
    
    document.querySelector("#infoProductName").value = `${name}`;
    document.querySelector("#infoDescription").value = `${description}`;
    document.querySelector("#infoPrice").value = `${price}`;
    document.querySelector("#infoImgProduct").src = `${img}`;

}
