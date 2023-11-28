function User(name, phone, email, product) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.product = product;
	this.status = 'new';
}

const user1 = new User('Пользователь1', 89990010101, 'user1@mail.ru', 'course-html');
const user2 = new User('Пользователь2', 89990020202, 'user2@mail.ru', 'course-html');
const user3 = new User('Пользователь3', 89990030303, 'user3@mail.ru', 'course-js');
const user4 = new User('Пользователь4', 89990040404, 'user4@mail.ru', 'course-js');
const user5 = new User('Пользователь5', 89990050505, 'user5@mail.ru', 'course-vue');
const user6 = new User('Пользователь6', 89990060606, 'user6@mail.ru', 'course-vue');
const user7 = new User('Пользователь7', 89990070707, 'user7@mail.ru', 'course-php');
const user8 = new User('Пользователь8', 89990080808, 'user8@mail.ru', 'course-php');
const user9 = new User('Пользователь9', 89990090909, 'user9@mail.ru', 'course-wordpress');
const user10 = new User('Пользователь10', 89990101010, 'user10@mail.ru', 'course-wordpress');

export const testData = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];


