// Класс, создающий объект с рандомными данными
class ExampleItem {
	constructor(name, phone, email, product) {
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.product = product;
	}
}

// Создаём массив с тестовыми данными
const testData = [
	new ExampleItem('Пользователь1', parseInt('+79990010101'), 'user1@mail.ru', 'course-html'),
	new ExampleItem('Пользователь2', parseInt('+79990020202'), 'user2@mail.ru', 'course-html'),
	new ExampleItem('Пользователь3', parseInt('+79990030303'), 'user3@mail.ru', 'course-js'),
	new ExampleItem('Пользователь4', parseInt('+79990040404'), 'user4@mail.ru', 'course-js'),
	new ExampleItem('Пользователь5', parseInt('+79990050505'), 'user5@mail.ru', 'course-vue'),
	new ExampleItem('Пользователь6', parseInt('+79990060606'), 'user6@mail.ru', 'course-vue'),
	new ExampleItem('Пользователь7', parseInt('+79990070707'), 'user7@mail.ru', 'course-php'),
	new ExampleItem('Пользователь8', parseInt('+79990080808'), 'user8@mail.ru', 'course-php'),
	new ExampleItem('Пользователь9', parseInt('+79990090909'), 'user9@mail.ru', 'course-wordpress'),
	new ExampleItem('Пользователь10', parseInt('+79990101010'), 'user10@mail.ru', 'course-wordpress'),
]

// Генератор рандомного числа из max вариантов
function getRandomIndex(max) {
	return Math.floor(Math.random() * max);
}

// Функция возврата рандомных данных
export default function getRandomData() {
	const index = getRandomIndex(testData.length);
	return testData[index];
}