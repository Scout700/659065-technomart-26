var link = document.querySelectorAll(".buy-link");
var popup = document.querySelector(".category-back");
var close = popup.querySelector(".modal-close");

for (var i=0; i<link.length; i++ ){
  link[i].addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-show");
  });
}

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (popup.classList.contains("modal-show")) {
  popup.classList.remove("modal-show");
}
}
});
