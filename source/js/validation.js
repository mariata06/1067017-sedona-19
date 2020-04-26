/*****************************ОТПРАВКА ФОРМЫ, МОДАЛЬНЫЕ ОКНА******************************/
var button = document.querySelector(".form-review__button");

var popupSuccess = document.querySelector(".popup-success");
var closeSuccess = popupSuccess.querySelector(".popup-success__button");

var popupError = document.querySelector(".popup-error");
var closeError = popupError.querySelector(".popup-error__button");

var form = document.querySelector(".form-review__content");

var userName = form.querySelector("[name=user-name]");

var userEmail = form.querySelector("[name=user-email]");

var userMessage = form.querySelector("[name=user-message]");

var isStorageSupport = true;
var currentName = "";
var currentEmail = "";

try {
  currentName = localStorage.getItem("userName");
  currentEmail = localStorage.getItem("userEmail");

} catch (err) {
  isStorageSupport = false;
}

popupSuccess.classList.add("popup-success--hide");
popupError.classList.add("popup-error--hide");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  //console.log("начало");
  //alert("начало");
  if (!userName.value || !userEmail.value || !userMessage.value) {

    evt.preventDefault();
    popupError.classList.remove("popup-error--show");
    popupError.offsetWidth = popupError.offsetWidth;
    popupError.classList.add("popup-error--show");
    //alert("пусто");
  } else if (isStorageSupport) {
    //alert("заполнили таки");
    localStorage.setItem("user-name", userName.value);
    localStorage.setItem("user-email", userEmail.value);
    popupSuccess.classList.add("popup-success--show");
  }
  //form.classList.add("form-show");

  //popupsuccess.classList.add("popup-success--show");
});

function cursorFocus() {
  if (!userName.value) {
    userName.focus();
  } else if (!userEmail.value) {
    userEmail.focus();
  } else if (!userMessage.value) {
    userMessage.focus();
  }
}

closeSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup-success--show");
});

closeError.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupError.classList.remove("popup-error--show");
  popupError.classList.add("popup-error");
  cursorFocus();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupError.classList.contains("popup-error--show")) {
      popupError.classList.remove("popup-error--show");
      cursorFocus();
    } else
    if (popupSuccess.classList.contains("popup-success--show")) {
      popupSuccess.classList.remove("popup-success--show");
    }
  }
});
