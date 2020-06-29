export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

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