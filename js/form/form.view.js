// Элементы

const elements = {
	form: document.querySelector('#form'),
	name: document.querySelector('#name'),
	phone: document.querySelector('#phone'),
	email: document.querySelector('#email'),
	product: document.querySelector('#product'),
}

// Заполнение тестовых данных в разметку
function insertTestData(object) {
	elements.name.value = object.name;
	elements.phone.value = object.phone;
	elements.email.value = object.email;
	elements.product.value = object.product;
}

// Получение данных из инпутов
function getFormInput() {
	return new FormData(elements.form);
}

// Очистка формы
function clearForm() {
	elements.form.reset();
}

export { elements, insertTestData, getFormInput, clearForm }