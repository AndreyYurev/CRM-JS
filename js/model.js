export default class Model {
	constructor() {
		this.requests = []
	}

	addRequest(requestObject) {
		// request = {
		// 	id: requestObject.id,
		// 	name: requestObject.name,
		// 	email: requestObject.email,
		// 	phone: requestObject.phone,
		// 	product: requestObject.product,
		// 	status: requestObject.status,
		// 	date: requestObject.date,
		// }
		let id = 1;
		if (this.requests.length > 0) {
			id = this.requests[this.requests.length - 1]['id'] + 1;
		}
		const newRequest = {
			id: requestObject.id,
			name: requestObject.name,
			email: requestObject.email,
			phone: requestObject.phone,
			product: requestObject.product,
			status: requestObject.status,
			date: requestObject.date,
		}
		this.requests.push(newRequest);
		return newRequest;
	}
}