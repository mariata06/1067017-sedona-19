var button = document.querySelector(".burger-menu");

var mobileMenu = document.querySelector(".site-nav");

var close = document.querySelector(".site-nav__close");

mobileMenu.classList.add("site-nav--hide");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.toggle("site-nav--hide");
  mobileMenu.classList.add("site-nav--show");
  button.classList.add(".burger-menu--hide");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.remove("site-nav--show");
  mobileMenu.classList.add("site-nav--hide");
  button.classList.remove(".burger-menu--hide");
});
