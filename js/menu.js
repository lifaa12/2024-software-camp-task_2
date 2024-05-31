// hamburger-menu
const nav=document.querySelector(".navbar");
const navItem=document.querySelector(".nav")
const menuBtn=document.querySelector(".menu-button");
const menuBtnStatus=document.querySelector(".menu-button")
menuBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  menuBtnStatus.classList.toggle("menu-hide");
  menuBtnStatus.classList.toggle("menu-show");
  navItem.classList.toggle("animate__fadeIn");
  nav.classList.toggle("navbar-drop");
});