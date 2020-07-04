export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const RESET_INDEX = "RESET_INDEX";
export const INCREMENT_INDEX = "INCREMENT_INDEX";
export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const DECREMENT_SCORE = "DECREMENT_SCORE";

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