const cartList = document.querySelector('.cart-products');
let removeCart;
let removalHandler;

function updatingRemovalList() {
	removeCart = document.querySelectorAll('.cart-remove');
}

function removingQuantityInCart() {
	amountProducts.innerHTML--
	if (amountProducts.innerHTML < 0) {
		amountProducts = 0
	}
}

function removingPriceInCart(item) {
	let removeName = item.querySelector('.cart-name').innerHTML;
	for (let i = 0; i < data.length; i++) {
		if (removeName === data[i].nameItem) {
			cartValue -= data[i].value;
		}
	}
	if (cartValue < 0) {
		cartValue = 0;
	}
	priceProducts.innerHTML = `R$ ${cartValue.toFixed(2)}`;
}

function addRemovalToCart(item) {
	let removalItem = item.closest('.cart');
	let amountSpan = removalItem.querySelector('.cart-amount')
	let amount = parseInt(amountSpan.textContent);
	removingQuantityInCart();
	removingPriceInCart(removalItem);
	if (amount > 1) {
		amount--;
		amountSpan.textContent = amount;
	}
	else {
		removalItem.remove();
	}
	checkIfTheCartIsEmpty();
}

  
