var feedback = document.querySelector(".feedback-btn");
var popupSecond = document.querySelector(".modal-back");
var close = popupSecond.querySelector(".modal-close");
var login = popupSecond.querySelector("[name=name]");
var form = popupSecond.querySelector(".feedback-form");
var email = popupSecond.querySelector("[name=email]");
var message = popupSecond.querySelector("[name=message]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSecond.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
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
  if (!login.value || !email.value) {
    evt.preventDefault();
    popupSecond.classList.remove("modal-error");
    popupSecond.offsetWidth = popupSecond.offsetWidth;
    popupSecond.classList.add("modal-error");
  }  else {
  if (isStorageSupport) {
      localStorage.setItem("login", login.value);
  }
  }

  if (!message.value) {
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
