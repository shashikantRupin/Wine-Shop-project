document.querySelector("#add").addEventListener("click", myDetail)

let addArr = JSON.parse(localStorage.getItem("address")) || []

function myDetail() {
    event.preventDefault()
    let addObj = {
      name : document.querySelector("#name").value,
      add1 : document.querySelector("#lane1").value,
      add2 : document.querySelector("#lane2").value,
      dist : document.querySelector("#dist").value,
      pin : document.querySelector("#pin").value,
      mobile : document.querySelector("#mobile").value,
    }
    document.querySelector("#name").value = ""
    document.querySelector("#lane1").value = ""
    document.querySelector("#lane2").value = ""
    document.querySelector("#dist").value = ""
    document.querySelector("#pin").value = ""
    document.querySelector("#mobile").value = ""

    if(!addObj.name||!addObj.add1||!addObj.add2||!addObj.dist||!addObj.pin||!addObj.mobile) {
      alert("Please fill all credentials")
    }else{
      addArr.push(addObj)

      localStorage.setItem("address", JSON.stringify(addArr))

      window.location.href = "payment.html"
    }
}

function fetchPin() {
  let pinCode = document.querySelector("#pin").value

  if(pinCode.length!==6){
    document.querySelector("#pinErr").innerText = "PIN Code must be of 6 digits"
  }else{
    document.querySelector("#pinErr").innerText = ""

    getPincode()
  }
}

let getPincode = async () => {
  try {
    let pinData = document.querySelector("#pin").value
    let response = await fetch(`https://api.postalpincode.in/pincode/${pinData}`)
    let data = await response.json()
    displayPIN(data[0].PostOffice)
    console.log(data[0].PostOffice)
  } catch (error) {
    console.log(error)
  }
}

function displayPIN(arr) {
  let blockAdd = document.querySelector("#lane2")
  blockAdd.value = arr[0].Block
  blockAdd.readOnly = true
  document.querySelector("#dist").value = arr[0].District
  document.querySelector("#dist").readOnly = true
}

var options = {
    "key": "rzp_test_mlbBT3Tp1xus4n", // Enter the Key ID generated from the Dashboard
    "amount": "100000",
    "currency": "INR",
    "description": "Acme Corp",
    "image": "https://blog.playo.co/wp-content/uploads/2018/04/Playo-dp-gradient4-1.png",
    // "prefill":
    // {
    //   "email": "gaurav.kumar@example.com",
    //   "contact": +919900000000,
    // },
    config: {
      display: {
        blocks: {
          utib: { //name for Axis block
            name: "Pay using Axis Bank",
            instruments: [
              {
                method: "card",
                issuers: ["UTIB"]
              },
              {
                method: "netbanking",
                banks: ["UTIB"]
              },
            ]
          },
          other: { //  name for other block
            name: "Other Payment modes",
            instruments: [
              {
                method: "card",
                issuers: ["ICIC"]
              },
              {
                method: 'netbanking',
              }
            ]
          }
        },
        hide: [
          {
          method: "upi"
          }
        ],
        sequence: ["block.utib", "block.other"],
        preferences: {
          show_default_blocks: false // Should Checkout show its default blocks?
        }
      }
    },
    "handler": function (response) {
      // alert(response.razorpay_payment_id)
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature)
      // addData()
      window.location.href = "cart.html"
    },
    // "modal": {
    //   "ondismiss": function () {
    //     if (confirm("Are you sure, you want to close the form?")) {
    //       txt = "You pressed OK!";
    //       console.log("Checkout form closed by the user");
    //     } else {
    //       txt = "You pressed Cancel!";
    //       console.log("Complete the Payment")
    //     }
    //   }
    // }
  };
  var rzp1 = new Razorpay(options);
  document.getElementById('rzp-button1').onclick = function (e) {
    rzp1.open();
    e.preventDefault();
  }