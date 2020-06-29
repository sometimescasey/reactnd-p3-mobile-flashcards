import { 
    RECEIVE_DATA, 
    ADD_DECK, 
    ADD_CARD } from '../actions';

function entries (state = {}, action) {
	switch (action.type) {
		case RECEIVE_DATA:
			return {
				...state,
				...action.data
			};
		case ADD_DECK:
			return {
				...state,
				...action.deck
            };
        case ADD_CARD:
            const currentDeck = state[action.deck];
            return {
                ...state,
                [action.deck]: {
                    ...currentDeck,
                    questions: [
                        ...currentDeck[questions],
                        action.card,
                    ]
                }
            }
		default:
			return state
	}
}

export default entries;