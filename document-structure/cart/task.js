let controllers = Array.from(document.getElementsByClassName('product__quantity-control'));
controllers.forEach(elem => elem.addEventListener('click', changeQuantity));
function changeQuantity() {
    let choseQuantity = this.closest('.product__quantity-controls');
    let quantity = choseQuantity.querySelector('.product__quantity-value');
    if (this.classList.contains('product__quantity-control_dec')) {
        if (Number(quantity.innerText) === 1) {
            return false;
        }
        quantity.innerText = Number(quantity.innerText) - 1;

    } else if (this.classList.contains('product__quantity-control_inc')) {
        quantity.innerText = Number(quantity.innerText) + 1;
    }
}
let cartSubmit = Array.from(document.getElementsByClassName('product__add'));
cartSubmit.forEach(elem => elem.addEventListener('click', addToCart));
function addToCart() {
    let additionalItem = this.closest('.product');
    let cart = document.querySelector('.cart__products');
    let cartItems = Array.from(cart.getElementsByClassName('cart__product'));
    let check = cartItems.filter(elem => elem.dataset.id === additionalItem.dataset.id);
    if (check.length >= 1) {
        check.forEach(elem => elem.querySelector('.cart__product-count').innerText = Number(check[0].innerText) + Number(additionalItem.querySelector('.product__quantity-value').innerHTML));
    } else {
    let newItem = document.createElement('div');
    newItem.dataset.id = additionalItem.getAttribute("data-id");
    newItem.classList.add('cart__product');
    let itemImage = document.createElement('img');
    itemImage = additionalItem.querySelector('img').cloneNode(false);
    itemImage.classList.add('cart__product-image');
    let itemQuantity = document.createElement('div');
    itemQuantity.textContent = additionalItem.querySelector('.product__quantity-value').innerHTML;
    itemQuantity.classList.add('cart__product-count');
    newItem.appendChild(itemQuantity);
    newItem.appendChild(itemImage);

    cart.appendChild(newItem);
}
}