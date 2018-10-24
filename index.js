var element = document.getElementsByClassName('products')[0];
if (element) {
  element.addEventListener("click", function(e) {
    var productsElement = document.getElementsByClassName('all-products')[0]
    if (productsElement) {
      productsElement.style.display = productsElement.style.display == 'none' ? 'block' : 'none';
    }
  }, false);
}

// клик на "humburger" - выскакивает "hamburger_menu"
// клик на "x" (по id) - "hamburger_menu" закрывается
// клик на "hamburger_products" - выскакивает "market"
// клик на "supermarkt" - выскакивает "markets"
// клик на "kaffee" - выскакивает "poduct-goods"
