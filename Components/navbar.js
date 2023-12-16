console.log("This is navbar.js")
let id;
let debounc = (func,delay)=>{
    if (id) {
        clearTimeout(id);
      }

    id = setTimeout(()=>{
        func();
    },delay)
}


let getdata = async ()=>{
    try{
        
        let inp = document.getElementById("navbar_inp").value;
        let result = await fetch(`http://localhost:3000/vines?q=${inp}`);
        let data = await result.json();
        console.log(data);
            shownavbarData(data);
        
    }
    catch(error){
        console.log(error);
    }
}
let debouncedata = document.getElementById("debouncdata");
let shownavbarData = (array)=>{
    debouncedata.innerHTML="";
    if(array.length==0||array.length>40){
        debouncedata.style.display="none";
    }
    else{
        let ul = document.createElement("ul");
    array.forEach(element => {
        let li = document.createElement("li");
        li.textContent=element.name;
        li.addEventListener("click",()=>{
            localStorage.setItem("ID",element.id);
            location.href="productDesc.html";
        })
        ul.append(li);
    });
    debouncedata.append(ul);
    debouncedata.style.display="block";
    }
}