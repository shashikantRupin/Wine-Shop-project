


let limit=9;
let totalpages;
let pageNum=1;
let fetchedData;

let url = `http://localhost:3000/vines`

getWineData()
async function getWineData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      fetchedData = data;
  
      console.log(data);
    //   displayWines(data);
      getWinesPagination(pageNum)
    } catch (err) {
      console.log(err);
    }
  }

  console.log(totalpages)

console.log(totalpages)



function displayWines(data){
    document.getElementById("product-div").textContent =""  //container
    data.map((elem)=>{
        let div = document.createElement("div") 
        div.setAttribute("id", "box") 

        let offDiv = document.createElement("div")
        offDiv.setAttribute("id", "offDiv")

        let h2= document.createElement("h2")
        h2.setAttribute("id", "H2")
        h2.textContent = `${elem.off}%`
        offDiv.append(h2)
           
        let anchor = document.createElement("a")
        anchor.setAttribute("id", "anchor")

        anchor.setAttribute("href", "proDesc.html")
        anchor.setAttribute("target", "_blank")
       
        let image = document.createElement("img")
        image.setAttribute("src", elem.img_url)
        image.setAttribute("id", "images")
        anchor.append(image)
        image.addEventListener("click",function(){
            gotoProDesc(elem.id)
            console.log(elem.id)
        })


        let desc = document.createElement("p")
        desc.textContent = elem.name
        desc.setAttribute("id", "desc")

        let concg = document.createElement("div")
        concg.setAttribute("id", "concg")
        let country = document.createElement("p")
        country.textContent = elem.country
        let category = document.createElement("p")
        category.textContent = elem.category
        
        concg.append(country, category)
       

        let pc_Div = document.createElement("div")
        pc_Div.setAttribute("id", "pcDiv")
        let price = document.createElement("p")
        price.textContent = "₹" + elem.price
        price.setAttribute("id", "price")
        
        let pBtn = document.createElement("p")
        pBtn.setAttribute("id", "pBtn")
        let button = document.createElement("button")
        button.textContent  = "Add"
        button.setAttribute("id", "btn")
        button.addEventListener("click", function(){
            setTocart(elem)
            alert("Added to Cart")
            window.location.href = "cart.html"

        })
        pBtn.append(button)

        pc_Div.append(price, pBtn)

       div.append(offDiv,anchor, desc, concg,  pc_Div)
       
       document.getElementById("product-div").append(div)


    })
}

//set to cart func
var cartData = JSON.parse(localStorage.getItem("cart-product")) || []
function setTocart(elem){
    console.log("hi")
  cartData.push(elem)
  localStorage.setItem("cart-product", JSON.stringify(cartData))

} 


function gotoProDesc(id){
    localStorage.setItem("ID", JSON.stringify(id))
 }



//sort by price
function sortByPrice() {
    var value = document.getElementById("select-price").value;

    if (value === "htl") {
    var sorted = fetchedData.sort((a, b) => {
        return b.price - a.price;
    })
    console.log(sorted);
    }

    if (value === "lth") {
    var sorted = fetchedData.sort((a, b) => {
        return a.price - b.price;
    })
    
    }

    displayWines(sorted)

}



//filter by country
function filterbyCountry(){
    
    var country = document.getElementById("select-country").value
    var filteredVal = fetchedData.filter((elem)=>{
          if(country === ""){
              return true
          }
          else{
              return country === elem.country
          }
      })
      displayWines(filteredVal)

}


//filter by discount
function filterbyDiscount(){
    var discount = document.getElementById("discount").value
    
    var filteredVal = fetchedData.filter((elem)=>{
          if(discount === ""){
              return true
          }
          else{
              return parseInt(discount) === elem.off
          }
      })
      displayWines(filteredVal)

}



//filter by category_1
function filterbyCategory_1(){
    var category_1 = document.querySelector("#category-1 h2").textContent;
    // var category_2 = document.querySelector("#category-2 h2").textContent;
    // var category_3 = document.querySelector("#category-3 h2").textContent;


    console.log(category_1)
    // console.log(category_2)

    
    var filteredVal = fetchedData.filter((elem)=>{
          if(category_1  === ""){
              return true
          }
          else{
              return category_1 === elem.category
          }


      })
      displayWines(filteredVal)

}


//filter by category_2
function filterbyCategory_2(){
    var category_2 = document.querySelector("#category-2 h2").textContent;
  
    var filteredVal = fetchedData.filter((elem)=>{
          if(category_2  === ""){
              return true
          }
          else{
              return category_2 === elem.category
          }


      })
      displayWines(filteredVal)

}

//filter for category 3
function filterbyCategory_3(){
    var category_3 = document.querySelector("#category-3 h2").textContent;

    var filteredVal = fetchedData.filter((elem)=>{
          if(category_3  === ""){
              return true
          }
          else{
              return category_3 === elem.category
          }


      })
      displayWines(filteredVal)

}


//
document.getElementById("category-1").addEventListener("click", ()=>{
    filterbyCategory_1()
})

document.getElementById("category-2").addEventListener("click", ()=>{
    filterbyCategory_2()
})

document.getElementById("category-3").addEventListener("click", ()=>{
    filterbyCategory_3()
})


// pagination

 
let prev = document.getElementById("prev")
let next = document.getElementById("next")    
getWinesPagination(pageNum)

async function getWinesPagination(pageNum){
     if(pageNum == 1){
            prev.disabled = true
        }
        else{
            prev.disabled = false
        }

        if(pageNum === totalpages){
            next.disabled = true
        }
        else{
            next.disabled = false
        }
    try{
      
        let res = await fetch(`http://localhost:3000/vines?_page=${pageNum}&_limit=9`)
        let data2 = await res.json()
        console.log(data2)
        let totalItems = res.headers.get("X-Total-Count"); // Retrieve the header after response.json()
        totalpages = totalItems/limit
        console.log(totalpages)
        console.log(totalItems);
        document.getElementById("page").innerHTML = "Page No:  " +pageNum
        // display(data.data)
        displayWines(data2)
       
    }catch(err){
        console.log(err)
    }
}

////////////


prev.addEventListener("click", ()=>{
    if(pageNum==1){
        return
    }
    pageNum--
    getWinesPagination(pageNum)
})


next.addEventListener("click", ()=>{
    if(pageNum == totalpages){
        return
    }
    pageNum++
    getWinesPagination(pageNum)
})
///////////






// fetchwithSearch(search)
async function fetchwithSearch(search){
   
    
    try{
      
        let resp = await fetch(`http://localhost:3000/vines?q=${search}`)
        let data2 = await resp.json()
        console.log(data2)
        displayWines(data2)
       
    }catch(err){
        console.log(err)
    }
}


//my search
function mySearch(){
    let search = document.getElementById("search-inp").value
    console.log("yayy")
    fetchwithSearch(search)
}



document.getElementById("search-inp").addEventListener("click", ()=>{
    // document.getElementById("search-inp").style.border = "none"
})





