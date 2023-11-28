import { testData } from './form.test-data.js';

export default class View {
	elements = {
		form: document.getElementById('form'),
		nameInput: document.getElementById('name'),
		phoneInput: document.getElementById('phone'),
		emailInput: document.getElementById('email'),
		productSelect: document.getElementById('product'),
	}

	getRandomData() {
		const n = Math.floor(Math.random() * testData.length);
		this.elements.nameInput.value = testData[n].name;
		this.elements.phoneInput.value = testData[n].phone;
		this.elements.emailInput.value = testData[n].email;
		this.elements.productSelect.value = testData[n].product;
	}
}