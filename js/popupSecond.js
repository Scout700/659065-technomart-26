var feedback = document.querySelector(".feedback-btn");
var popupSecond = document.querySelector(".modal-back");
var close = popupSecond.querySelector(".modal-close");
var login = popupSecond.querySelector("[name=name]");
var form = popupSecond.querySelector(".feedback-form");
var emailUser = popupSecond.querySelector("[name=email]");
var messageUser = popupSecond.querySelector("[name=message]");

var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";

try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("emailUser");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSecond.classList.add("modal-show");
  if (storageLogin&&storageEmail) {
    login.value = storageLogin;
    emailUser.value = storageEmail;
    messageUser.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSecond.classList.remove("modal-show");
  popupSecond.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !emailUser.value) {
    evt.preventDefault();
    popupSecond.classList.remove("modal-error");
    popupSecond.offsetWidth = popupSecond.offsetWidth;
    popupSecond.classList.add("modal-error");
  }  else {
  if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("emailUser", emailUser.value);
  }
  }

  if (!messageUser.value) {
    evt.preventDefault();
    popupSecond.classList.remove("modal-error");
    popupSecond.offsetWidth = popupSecond.offsetWidth;
    popupSecond.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popupSecond.classList.contains("modal-show")) {
    popupSecond.classList.remove("modal-show");
    popupSecond.classList.remove("modal-error");
  }
}
});
