var mapLink = document.querySelector(".contacts-link-map");

var mapPopup = document.querySelector(".modal-map");
var close = mapPopup.querySelector(".modal-close");
mapLink.addEventListener("click", function (evt) {
evt.preventDefault();
mapPopup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (mapPopup.classList.contains("modal-show")) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  }
}
});
