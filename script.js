
const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".navbar");


humburger.addEventListener("click",()=>{

  navbar.classList.toggle("hide-show-navbar");

  humburger.classList.toggle("max-cross")

})

navbar.addEventListener("click",()=>{

  navbar.classList.remove("hide-show-navbar");

  humburger.classList.remove("max-cross")

})