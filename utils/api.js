import { _getData } from "./data.js";

export function getInitialData() {
	return _getData().then(
		(data) => {
			console.group("getInitialData()");
			    console.log("data: ", data);
			console.groupEnd();
			return data;
	}
		);
}

export function generateUID () {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}