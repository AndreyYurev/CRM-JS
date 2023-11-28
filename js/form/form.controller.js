
import View from './form.view.js';
import Model from './../model.js';
import { testData } from './form.test-data.js';

const view = new View();
const model = new Model();

view.getRandomData();

view.elements.form.addEventListener('submit', function (e) {
	e.preventDefault();
	model.addRequest(view.getRandomData());
})