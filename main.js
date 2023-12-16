// const radios = document.querySelectorAll('input[name="slider-radio"]');
// const slides = document.querySelector('.slides');

// radios.forEach(radio => {
//   radio.addEventListener('change', function() {
//     const slideIndex = Array.from(radios).indexOf(this);
//     slides.style.marginLeft = `-${slideIndex * 100}%`;
//   });
// });


  // Wait for the document to load

  setInterval(function() {
    const slides = document.querySelectorAll('.slide');
    const activeSlide = document.querySelector('.slide.active');
    const nextSlide = activeSlide.nextElementSibling || slides[0];

    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');

    const activeRadio = document.querySelector('.slider-controls input:checked');
    const nextRadio = activeRadio.nextElementSibling || document.querySelector('.slider-controls input:first-child');

    activeRadio.removeAttribute('checked');
    nextRadio.setAttribute('checked', 'checked');
  }, 5000);


    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("Modal");
      var yesButton = document.getElementsByClassName("model_yes")[0];
      var noButton = document.getElementsByClassName("model_no")[0];
      var close = document.getElementsByClassName("close")[0];
      // Display the modal
      modal.style.display = "block";
      
  
      // Close the modal when the close button is clicked
      yesButton.onclick = function() {
        modal.style.display = "none";
      };
      noButton.onclick = function() {
        modal2.style.display = "block";
        modal.style.display = "none";
      };
      close.onclick = function(){
          window.location.href = 'https://www.google.com/';
      }
  
      // Close the modal when the user clicks outside of it
      window.onclick = function(event) {
        if (event.target == modal) {
          // modal.style.display = "none";
        }
      };




// import Navbar from "./Components/nav.js";
// let nav = document.getElementById("nav_up");
// nav.innerHTML = Navbar();

// import foo from "./Components/footer.js";
// let footer = document.querySelector("footer");
// footer.innerHTML = foo();






