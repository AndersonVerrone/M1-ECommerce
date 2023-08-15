const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
console.log(searchButton);

function startSearch(item) {
	let search = searchInput.value.toUpperCase();
	let tagProduct = item.querySelector('.card-tag').textContent.toUpperCase();
	let nameProduct = item.querySelector('.card-name').textContent.toUpperCase();
	let tagPurified = removeAccents(tagProduct);
	let namepurified = removeAccents(nameProduct);
	let searchpurified = removeAccents(search);
	if (searchpurified === tagPurified || searchpurified === namepurified) {
		// item.classList.add('disable');
		item.classList.remove('disable');
	}
	else {
		// item.classList.remove('disable');
		item.classList.add('disable');
	}
}

function removeAccents(str) {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function searchLetterByLetter(item) {
	let tagProduct = item.querySelector('.card-tag').textContent.toUpperCase();
	let nameProduct = item.querySelector('.card-name').textContent.toUpperCase();
	let search = searchInput.value.toUpperCase();
	let tagPurified = removeAccents(tagProduct);
	let namepurified = removeAccents(nameProduct);
	let searchpurified = removeAccents(search);
	let strTag = '';
	let strName = '';
	let strSearch = '';
	for (let i = 0; i < search.length; i++) {
		strTag += tagPurified[i];
		strName += namepurified[i];
		strSearch += searchpurified[i];
		if (strTag === strSearch || strName === strSearch) {
			item.classList.remove('disable');
		}
		else {
			item.classList.add('disable');
		}
	}
}
searchButton.addEventListener('click', () => {
	card.forEach((item) => {
		startSearch(item);
	})
	searchInput.value = '';
})
searchInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		card.forEach((item) => {
			startSearch(item);
		})
		searchInput.value = '';
	}
})
searchInput.addEventListener('input', () => {
	card.forEach((item) => {
		if (searchInput.value != '') {
			searchLetterByLetter(item);
		}
		else {
			item.classList.remove('disable');
		}
	})
})