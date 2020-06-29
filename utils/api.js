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