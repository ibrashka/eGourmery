var element = document.getElementsByClassName('products')[0];
if (element) {
  element.addEventListener("click", function(e) {
    var productsElement = document.getElementsByClassName('all-products')[0]
    if (productsElement) {
      productsElement.style.display = productsElement.style.display == 'none' ? 'block' : 'none';
    }
  }, false);
}
