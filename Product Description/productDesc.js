let ID = localStorage.getItem("ID");
let response = async () => {
    try {
        let result = await fetch(`http://localhost:3000/vines/${ID}`);
        let data = await result.json();
        showData(data);
    }
    catch (error) {
        console.log(error);
    }
}
response();

let showData = (data) => {
    let name = document.getElementById("name_of_vine");
    let category = document.getElementById("category_of_vine");
    let country = document.getElementById("country_of_vine");
    let price = document.getElementById("price_of_vine");
    let img = document.getElementById("img_of_vine");
    document.title = data.name;
    name.textContent = data.name;
    category.textContent = data.category;
    country.textContent = data.country;
    price.textContent = data.price;
    img.src = data.img_url;
    let cart_btn = document.getElementById("Add_to_cart_btn");
    cart_btn.addEventListener("click", () => {
        add_data_to_localstorage(data);
    })
    let Buy_now_btn = document.getElementById("Buy_now_btn");
    Buy_now_btn.addEventListener("click", () => {
        Buy_now(data);
    })
}

let cartcount = document.getElementById("cart_count");
let cart_minus = document.getElementById("cart_minus");
let cart_plus = document.getElementById("cart_plus");
let cart_count = 1;

cart_minus.addEventListener("click", () => {
    if (cart_count == 1) {

    }
    else {
        cart_count--;
        cartcount.textContent = cart_count;
    }
    console.log(cart_count);
})

cart_plus.addEventListener("click", () => {
    cart_count++;
    cartcount.textContent = cart_count;
})

let add_data_to_localstorage = (data) => {
    let new_product = {
        name: data.name,
        category: data.category,
        country: data.country,
        price: data.price,
        img_url: data.img_url,
        count:cart_count
    }
    // Retrieve the existing cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    var isProductInCart = false;
    if (cartItems && cartItems.length > 0) {
        isProductInCart = cartItems.some(function (item) {
            return item.name === data.name;
        });
    }

    // Show a pop-up if the product is already in the cart
    if (isProductInCart) {
        var modal = document.getElementById("myModal");
        var closeButton = document.getElementsByClassName("close")[0];
    
        // Display the modal
        modal.style.display = "block";
    
        // Close the modal when the close button is clicked
        closeButton.onclick = function() {
          modal.style.display = "none";
        };
    
        // Close the modal when the user clicks outside of it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
        return; // Stop the function execution
    }

    // Add the product to the cart
    cartItems.push(new_product);

    // Store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
let Buy_now = (data)=>{
    let new_product = {
        name: data.name,
        category: data.category,
        country: data.country,
        price: data.price,
        img_url: data.img_url,
        count:cart_count
    }
    var buynowitems = JSON.parse(localStorage.getItem('buynowitems')) || [];

    buynowitems.push(new_product);

    // Store the updated cart items in local storage
    localStorage.setItem('buynowitems', JSON.stringify(buynowitems));
    location.href="checkout.html"
}

import foo from "../Components/footer.js";
let footer = document.querySelector("footer");
footer.innerHTML=foo();

document.getElementById("gotosignin").addEventListener("click",()=>{
    location.href="../signIn/signIn.html"
})
document.getElementById("gotocart").addEventListener("click",()=>{
    location.href="../Cart Detail/cart.html"
})