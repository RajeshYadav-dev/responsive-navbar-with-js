
const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".navbar");


humburger.addEventListener("click",()=>{

  navbar.classList.toggle("hide-show-navbar");

  humburger.classList.toggle("max-cross")

})