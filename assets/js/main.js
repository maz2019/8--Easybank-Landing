const navbar = document.getElementById("navbar");
const menubtn = document.getElementById("menu-btn");

menubtn.addEventListener('click', ()=> {
    navbar.classList.toggle("hidden")
    console.log("clicked")
})