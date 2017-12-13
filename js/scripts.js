
var link = document.querySelector(".toggle-btn");
var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");
var date = popup.querySelector(".search-date");
var people = popup.querySelector(".search-amount");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!date.value || !people.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
});
