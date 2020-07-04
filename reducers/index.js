import { 
    RECEIVE_DATA, 
    ADD_DECK, 
    ADD_CARD,
    INCREMENT_INDEX,
    RESET_INDEX,
    // INCREMENT_SCORE,
    // DECREMENT_SCORE,
 } from '../actions';

// ------------ state shape --------------
//  export const DECK_DATA = {
//     React: {
//       title: 'React',
//       questions: [
//         {
//           question: 'What is React?',
//           answer: 'A library for managing user interfaces',
//         },
//         {
//           question: 'Where do you make Ajax requests in React?',
//           answer: 'The componentDidMount lifecycle event',
//         },
//         {
//             question: 'Can functional components store state?',
//             answer: 'Yes, using hooks!'
//         }
//       ],
//       score: 0,
//       currentIdx: 0,

function entries (state = {}, action) {
    let currentDeck = null;

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
            currentDeck = state[action.deck];
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
        case INCREMENT_INDEX:
            console.log("action.deck: ", action.deck);
            currentDeck = state[action.deck];
            return {
                ...state,
                [action.deck]: {
                    ...currentDeck,
                    currentIdx: currentDeck.currentIdx + 1,
                }
            }
        case RESET_INDEX:
            currentDeck = state[action.deck];
            const resetQuestions = {...currentDeck.questions};
            for (k in currentDeck.questions) {
                resetQuestions[k] = {
                    ...resetQuestions[k], 
                    correct: null}
            }
            return {
                ...state,
                [action.deck]: {
                    ...currentDeck,
                    currentIdx: 0,
                    score: 0,
                    questions: resetQuestions,
                }
            }
        // case INCREMENT_SCORE:
        //     currentDeck = state[action.deck];
        //     return {
        //         ...state,
        //         [action.deck]: {
        //             ...currentDeck,
        //             score: currentDeck.score + 1,
        //         }
        //     }
        // case DECREMENT_SCORE:
        //     return {
        //         ...state,
        //         [action.deck]: {
        //             ...currentDeck,
        //             score: currentDeck.score - 1,
        //         }
        //     }
		default:
			return state
	}
}

export default entries;