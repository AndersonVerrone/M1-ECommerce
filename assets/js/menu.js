const menuAll = document.querySelector('#menu-all');
const menuAcc = document.querySelector('#menu-accessories');
const menuTShirt = document.querySelector('#menu-tshirts');
const card = document.querySelectorAll('.card');

function selectItems(item, choice) {
	let products = item.querySelector('.card-tag').innerHTML;
	if (!choice) {
		item.classList.remove('disable');
	}
	else if (products !== choice) {
		item.classList.add('disable');
	}
	else {
		item.classList.remove('disable');
	}
}
menuAcc.addEventListener('click', () => {
	card.forEach((item) => {
		selectItems(item, 'Acessórios');
	})
})
menuTShirt.addEventListener('click', () => {
	card.forEach((item) => {
		selectItems(item, 'Camisetas');
	})
})
menuAll.addEventListener('click', () => {
	card.forEach((item) => {
		selectItems(item);
	})
})