export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const RESET_INDEX = "RESET_INDEX";
export const INCREMENT_INDEX = "INCREMENT_INDEX";
export const MARK_RIGHT = "MARK_RIGHT";
export const MARK_WRONG = "MARK_WRONG";

export function receiveData (data) {
	return {
		type: RECEIVE_DATA,
		data,
	}
}

export function addDeck (deck) {
	return {
		type: ADD_DECK,
		entry,
	}
}

export function addCard (deck, card) {
	return {
		type: ADD_CARD,
        deck,
        card,
	}
}

export function incrementIndex (deck) {
	return {
		type: INCREMENT_INDEX,
		deck,
	}
}

export function resetIndex (deck) {
	return {
		type: RESET_INDEX,
		deck,
	}
}

export function markRight (deck, qid) {
	return {
		type: MARK_RIGHT,
		deck,
		qid,
	}
}

export function markWrong (deck, qid) {
	return {
		type: MARK_WRONG,
		deck,
		qid,
	}
}