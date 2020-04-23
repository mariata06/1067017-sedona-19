var button = document.querySelector(".form-review__button");

//var popup = document.querySelector(".modal-dialog");
var popupsuccess = document.querySelector("popup-success")
var close = popup.querySelector(".popup-success__button");

var popuperror = document.querySelector("popup-error")
var ok = popup.querySelector(".popup-error__button");

var form = document.querySelector(".form-review__content");

var userName = popup.querySelector("[name=user-name]");

var userEmail = popup.querySelector("[name=user-email]");

var userMessage = popup.querySelector("[name=user-message]");

var isStorageSupport = true;
var currentName = "";
var currentEmail = "";

try {
  currentName = localStorage.getItem("userName");
  currentEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();

  //form.classList.add("form-show");

  if (currentName) {
    userName.value = currentName;
    userEmail.focus();
  } else {
    userName.focus();
  }

  if (currentEmail) {
    userEmail.value = currentEmail;
    userMessage.focus();
  } else {
    userEmail.focus();
  }

  popupsuccess.classList.add("popup-success--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupsuccess.classList.remove("popup-success--show");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popuperror.classList.remove("popup-error--show");
    popuperror.offsetWidth = popuperror.offsetWidth;
    popuperror.classList.add("popup-error--show");
  } else if (isStorageSupport) {
    localStorage.setItem("user-name", userName.value);
    localStorage.setItem("user-email", userEmail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popuperror.classList.contains("popup-error-show")) {
      popuperror.classList.remove("popup-error-show");
    }
    if (popupsuccess.classList.contains("popup-success--show")) {
      popupsuccess.classList.remove("popup-success--show");
    }
  }
});


