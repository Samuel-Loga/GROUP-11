var cart_item = document.getElementsByClassName("cart_item");

for (var i = 0; i < cart_item.length; i++) {
  cart_item[i].childNodes[1].addEventListener("click", function() {
    this.parentElement.classList.toggle("listVisible");
  })
}
