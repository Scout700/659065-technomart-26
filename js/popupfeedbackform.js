var feedback = document.querySelector(".feedback-btn");
var popupFeedbackForm = document.querySelector(".modal-back");
var closeFeedbackForm = popupFeedbackForm.querySelector(".modal-close");
var login = popupFeedbackForm.querySelector("[name=name]");
var form = popupFeedbackForm.querySelector(".feedback-form");
var emailUser = popupFeedbackForm.querySelector("[name=email]");
var messageUser = popupFeedbackForm.querySelector("[name=message]");

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
  popupFeedbackForm.classList.add("modal-show");
  if (storageLogin&&storageEmail) {
    login.value = storageLogin;
    emailUser.value = storageEmail;
    messageUser.focus();
  } else {
    login.focus();
  }
});

closeFeedbackForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedbackForm.classList.remove("modal-show");
  popupFeedbackForm.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !emailUser.value) {
    evt.preventDefault();
    popupFeedbackForm.classList.remove("modal-error");
    popupFeedbackForm.offsetWidth = popupFeedbackForm.offsetWidth;
    popupFeedbackForm.classList.add("modal-error");
  }  else {
  if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("emailUser", emailUser.value);
  }
  }

  if (!messageUser.value) {
    evt.preventDefault();
    popupFeedbackForm.classList.remove("modal-error");
    popupFeedbackForm.offsetWidth = popupFeedbackForm.offsetWidth;
    popupFeedbackForm.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popupFeedbackForm.classList.contains("modal-show")) {
    popupFeedbackForm.classList.remove("modal-show");
    popupFeedbackForm.classList.remove("modal-error");
  }
}
});
