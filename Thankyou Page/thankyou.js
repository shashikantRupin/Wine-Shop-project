let productArr = JSON.parse(localStorage.getItem("cart-product")) || []

let finalPrice = localStorage.getItem("finalCost")

displayProduct(productArr)
displayPrice()

function displayProduct(data) {
    document.querySelector("#displayProduct").innerHTML = null
    data.forEach((elem) => {
        let div = document.createElement("div")
        div.setAttribute("id", "productContainer")

        let img = document.createElement("img")
        img.setAttribute("id", "productImg")
        img.setAttribute("src", elem.img_url)

        let div1= document.createElement("div")
        div1.setAttribute("id", "div1")

        let div2 = document.createElement("div")
        div2.setAttribute("id", "div2")

        let name = document.createElement("h3")
        name.textContent = elem.name
        name.setAttribute("id", "name")

        // let delBtn = document.createElement("button")
        // delBtn.innerText = "X"
        // delBtn.setAttribute("id", "delBtn")
        // delBtn.addEventListener("click", function() {
        //     delData(elem , index)
        // })

        div2.append(name)

        let div3 = document.createElement("div")
        div3.setAttribute("id", "div3")

        let priceDiv = document.createElement("div")
        priceDiv.setAttribute("id", "priceDiv")

        // let mrp = document.createElement("p")
        // mrp.setAttribute("id", "mrp")
        // mrp.textContent = "₹" + elem.mrp

        let price = document.createElement("p")
        price.setAttribute("id", "price")
        price.textContent = "₹" + elem.price

        priceDiv.append( price)

        // let divQnt = document.createElement("div")
        // divQnt.setAttribute("id", "divQnt")

        // let lessBtn = document.createElement("button")
        // lessBtn.setAttribute("id", "btn1")
        // lessBtn.textContent = "-"
        
        // let p = document.createElement("p")
        // p.setAttribute("id", "spanQnt")
        // p.textContent = 1

        // let highBtn = document.createElement("button")
        // highBtn.setAttribute("id", "btn2")
        // highBtn.textContent = "+"
        // highBtn.addEventListener("click", function() {
        //     increaseQnt()
        // })

        // divQnt.append(lessBtn, p, highBtn)

        let mrpDiv = document.createElement("div")
        mrpDiv.setAttribute("id", "finalPrice")
        mrpDiv.textContent = "₹" + elem.price

        div3.append(priceDiv,  mrpDiv)

        div1.append(div2, div3)

        div.append(img, div1)

        document.querySelector("#displayProduct").append(div)
    })
}

function displayPrice() {
    // document.querySelector("#items_price").innerText = "₹ " + finalPrice
    document.querySelector("#item_amount").innerText = "₹ " + finalPrice
}

document.querySelector("#repeat").addEventListener("click", repeatOrder)

function repeatOrder() {
    window.location.href = "product.html"
}