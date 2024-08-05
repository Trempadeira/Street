function showCategory(categoryId) {
    // Selecionar todos os produtos
    var products = document.querySelectorAll('.category-products');
    products.forEach(function(product) {
        if (product.id === categoryId) {
            product.style.display = 'block'; // Mostrar produto da categoria selecionada
        } else {
            product.style.display = 'none'; // Ocultar os outros produtos
        }
    });
}