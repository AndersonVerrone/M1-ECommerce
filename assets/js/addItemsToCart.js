const addCart = document.querySelectorAll('.card-cart');
const cartContainer = document.querySelector('.cart-list');
const amountProducts = document.querySelector('#amount-product');
const priceProducts = document.querySelector('#price-product');
let cartProduct;
let cartValue = 0;


function checkForItem(index) {
    const cartProductName = document.querySelectorAll('.cart-name');
    for ( let i=0; i < cartProductName.length; i++) {
        if (cartProductName[i].innerHTML === data[index].nameItem) {
            cartProduct = cartProductName[i];
            return true
        };
    };
    return false
};

function addToCart(index) {

    if (checkForItem(index)) {
        let amount = cartProduct.closest('.cart')
        .querySelector('.cart-amount')
        .innerHTML++;
    } else {

        const liCart = document.createElement('li');
        liCart.classList.add('cart');
        cartContainer.appendChild(liCart);

        const amoutCart = document.createElement('span');
        amoutCart.classList.add('cart-amount');
        amoutCart.innerHTML = 1;
        liCart.appendChild(amoutCart);    

        const imgCart = document.createElement('img');
        imgCart.classList.add('cart-img');
        imgCart.src = data[index].img;
        imgCart.alt = data[index].nameItem;
        liCart.appendChild(imgCart);

        const descCart = document.createElement('div');
        descCart.classList.add('cart-desc');
        liCart.appendChild(descCart);

        const nameCart = document.createElement('p');
        nameCart.classList.add('cart-name');
        nameCart.innerHTML = data[index].nameItem;
        descCart.appendChild(nameCart);

        const priceCart = document.createElement('p');
        priceCart.classList.add('cart-price');
        priceCart.innerHTML = `R$ ${data[index].value.toFixed(2)}`;
        descCart.appendChild(priceCart);

        const removeCart = document.createElement('p');
        removeCart.classList.add('cart-remove');
        removeCart.innerHTML = 'Remover produto';
        descCart.appendChild(removeCart);
        
        removeCart.addEventListener('click', () => {
            addRemovalToCart(removeCart);
        });

    };

};

function addQuantityToCart() {
    amountProducts.innerHTML++;
};

function addPriceToCart(index) {
    cartValue += data[index].value;
    priceProducts.innerHTML = `R$ ${cartValue.toFixed(2)}`;
};

addCart.forEach((item,i) => {
    item.addEventListener('click', () => {
        addToCart(i);
        addQuantityToCart();
        addPriceToCart(i);
        checkIfTheCartIsEmpty();
    });
});
