const cartEmpty = document.querySelector('.cart-empty');
const cartProducts = document.querySelector('.cart-products')

function checkIfTheCartIsEmpty()
{
	if (cartContainer.childElementCount > 0)
	{
		if (!cartEmpty.classList.contains('disable') && cartProducts.classList
			.contains('disable'))
		{
			cartEmpty.classList.add('disable');
			cartProducts.classList.remove('disable');
		}
	}
	else
	{
		if (cartEmpty.classList.contains('disable') && !cartProducts.classList
			.contains('disable'))
		{
			cartEmpty.classList.remove('disable');
			cartProducts.classList.add('disable');
		}
	}
}