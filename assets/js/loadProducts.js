const cardsContainer = document.querySelector('.cards-container')
// const products = []

function createCards() {
	for (let i = 0; i < data.length; i++) {
		const card = document.createElement('li');
		card.classList.add('card');
		cardsContainer.appendChild(card);

		const imgCard = document.createElement('img');
		imgCard.classList.add('card-img');
		imgCard.src = data[i].img;
		imgCard.alt = data[i].nameItem;
		card.appendChild(imgCard);

		const tagCard = document.createElement('span');
		tagCard.classList.add('card-tag');
		tagCard.innerHTML = data[i].tag[0];
		card.appendChild(tagCard);

		const nameCard = document.createElement('h2');
		nameCard.classList.add('card-name');
		nameCard.innerHTML = data[i].nameItem;
		card.appendChild(nameCard);

		const descCard = document.createElement('p');
		descCard.classList.add('card-desc');
		descCard.innerHTML = data[i].description;
		card.appendChild(descCard);

		const priceCard = document.createElement('p');
		priceCard.classList.add('card-price');
		priceCard.innerHTML = `R$ ${data[i].value.toFixed(2)}`;
		card.appendChild(priceCard);
        
		const cartCard = document.createElement('p');
		cartCard.classList.add('card-cart');
		cartCard.innerHTML = data[i].addCart;
		card.appendChild(cartCard);
	}
}
createCards();