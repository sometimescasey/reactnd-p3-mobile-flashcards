export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const RESET_INDEX = "RESET_INDEX";
export const INCREMENT_INDEX = "INCREMENT_INDEX";
export const MARK_RIGHT = "MARK_RIGHT";
export const MARK_WRONG = "MARK_WRONG";

import { generateUID } from '../utils/api';

// ------------ state shape --------------
// export const DECK_DATA = {
//     React: {
//       title: 'React',
//       questions: {
//         "bfk839rj3hgq91jw4553": {
//           question: 'What is React?',
//           answer: 'A library for managing user interfaces',
//           timestamp: 1488579767190,
//           correct: null,
//         },

export function receiveData (data) {
	return {
		type: RECEIVE_DATA,
		data,
	}
}

export function addDeck (deckName) {
	return {
		type: ADD_DECK,
		deckName,
		deckObj: {
			title: deckName,
			questions: {},
			currentIdx: 0
		}
	}
}

export function addCard (deck, cardObj) {
	const newId = generateUID();
	console.log("newId: ", newId);
	return {
		type: ADD_CARD,
		deck,
		qid: newId,
        card: {
			...cardObj,
			timestamp: new Date().getTime(),
			correct: null,
		}
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