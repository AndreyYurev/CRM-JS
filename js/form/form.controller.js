import getRandomData from "./form.test-data.js";
import * as view from "./form.view.js";
import * as model from "./../model.js";

// запуск 
function init() {
	renderTestData();
	setupEventListeners();
}

// обработчики событий
function setupEventListeners() {
	view.elements.form.addEventListener('submit', formSubmitHandler);
}

// рендер тестовых данных на страницу
function renderTestData() {
	view.insertTestData(getRandomData());
}

// обработка событий формы
function formSubmitHandler(e) {
	e.preventDefault();
	const formData = view.getFormInput();
	model.addRequest(formData);
	view.clearForm();
	renderTestData();
}



init();