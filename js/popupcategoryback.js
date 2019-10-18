var links = document.querySelectorAll(".buy-link");
var popupCategoryBack = document.querySelector(".category-back");
var categoryBackClose = popupCategoryBack.querySelector(".modal-close");

for (var i=0; i<links.length; i++ ){
  links[i].addEventListener("click", function(event){
    event.preventDefault();
    popupCategoryBack.classList.add("modal-show");
  });
}

categoryBackClose.addEventListener("click", function (evt) {
evt.preventDefault();
popupCategoryBack.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (popupCategoryBack.classList.contains("modal-show")) {
  popupCategoryBack.classList.remove("modal-show");
}
}
});
