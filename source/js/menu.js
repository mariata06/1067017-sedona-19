/*****************************МОБИЛЬНОЕ МЕНЮ**********************************/

var buttonBurger = document.querySelector(".burger-menu");

var mobileMenu = document.querySelector(".site-nav");

var closeNav = document.querySelector(".site-nav__close");

mobileMenu.classList.add("site-nav--hide");

buttonBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.toggle("site-nav--hide");
  mobileMenu.classList.add("site-nav--show");
  buttonBurger.classList.add("burger-menu--hide");
});

closeNav.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.remove("site-nav--show");
  mobileMenu.classList.add("site-nav--hide");
  buttonBurger.classList.remove("burger-menu--hide");
});
