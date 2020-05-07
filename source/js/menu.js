/*****************************МОБИЛЬНОЕ МЕНЮ**********************************/

var buttonBurger = document.querySelector(".burger-menu");

var mobileMenu = document.querySelector(".site-nav");

var closeNav = document.querySelector(".site-nav__close");

//mobileMenu.classList.add("site-nav--hide"); // спрятанное моб меню при работающем js
//closeNav.classList.add("site-nav__close--hide");
//document.addEventListener("DOMContentLoaded", function (evt) {
// alert("Тест");
//buttonBurger.classList.add("burger-menu--show");
//});

alert("Тест");
buttonBurger.classList.remove("burger-menu--nojs");
closeNav.classList.remove("site-nav__close--nojs");

buttonBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.toggle("site-nav--hide");
  mobileMenu.classList.add("site-nav--show");
  buttonBurger.classList.add("burger-menu--hide");
  //closeNav.classList.add("site-nav__close--show");
});

closeNav.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.remove("site-nav--show");
  mobileMenu.classList.add("site-nav--hide");
  buttonBurger.classList.remove("burger-menu--hide");
});
