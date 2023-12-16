let productArr = JSON.parse(localStorage.getItem("cart-product")) || []

if(productArr.length === 0){
    // document.querySelector("#cart_detail").innerText = "There are no any products in cart. Click on continue for shopping"
    // let cont = document.createElement("button")
    // cont.textContent = "Continue"
    // cont.style.border = "none"
    // cont.style.backgroundColor = "Red"
    // cont.style.color = "White"
    // cont.style.width = "20%"
}else{
    displayProduct(productArr)
    calTotal()
}

function displayProduct(data) {
    document.querySelector("#display_product").innerHTML = null
    data.forEach((elem, index) => {
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

        let delBtn = document.createElement("button")
        delBtn.innerText = "X"
        delBtn.setAttribute("id", "delBtn")
        delBtn.addEventListener("click", function() {
            delData(elem , index)
        })

        div2.append(name, delBtn)

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

        let divQnt = document.createElement("div")
        divQnt.setAttribute("id", "divQnt")

        let lessBtn = document.createElement("button")
        lessBtn.setAttribute("id", "btn1")
        lessBtn.textContent = "-"
        lessBtn.addEventListener("click", function() {
            decreaseQnt(elem.price)
        })
        
        let p = document.createElement("p")
        p.setAttribute("id", "spanQnt")
        p.textContent = 1

        let highBtn = document.createElement("button")
        highBtn.setAttribute("id", "btn2")
        highBtn.textContent = "+"
        highBtn.addEventListener("click", function() {
            increaseQnt(elem.price)
        })

        divQnt.append(lessBtn, p, highBtn)

        let mrpDiv = document.createElement("div")
        mrpDiv.setAttribute("id", "finalPrice")
        mrpDiv.textContent = "₹" + elem.price

        div3.append(priceDiv, divQnt, mrpDiv)

        div1.append(div2, div3)

        div.append(img, div1)

        document.querySelector("#display_product").append(div)
    })
}

// let delArr = JSON.parse(localStorage.getItem("cart")) || []

function delData(elem, index) {
    productArr.splice(index, 1)
    localStorage.setItem("cart-product", JSON.stringify(productArr))
    displayProduct(productArr)
}

function decreaseQnt(price){
    let qnt = document.querySelector("#spanQnt")
    // let quant = 1
    if(quant > 1){
        quant--
        qnt.textContent = quant
        let amount = quant * price
        document.querySelector("#finalPrice").innerText = amount
    }else{
        document.querySelector("#btn1").style.display = "block"
    }
}
// let total;
let qnt = document.querySelector("#spanQnt")
var quant = 1
function increaseQnt(price) {
    quant++
    qnt.textContent = quant
    let amount = quant * price
    document.querySelector("#finalPrice").innerText = amount
    // document.querySelector("#total_amount").innerText = document.querySelector("#total_amount").innerText + amount
}

function calTotal() { 
    var total = productArr.reduce(function (acc, currEle) {
        return acc + currEle.price
    }, 0)

    let span = document.createElement("span")
    span.setAttribute("id", "total_amount")
    span.textContent = "₹" + total
    // var pot = total
    document.querySelector("#items").append(span)

    localStorage.setItem("finalCost", total)
}

document.querySelector("#submit").addEventListener("click", checkOut)

function checkOut() {
    window.location.href = "checkout.html"
}