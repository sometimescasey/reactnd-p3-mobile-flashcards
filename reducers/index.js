import { 
    RECEIVE_DATA, 
    ADD_DECK, 
    ADD_CARD,
    INCREMENT_INDEX,
    RESET_INDEX,
    MARK_RIGHT,
    MARK_WRONG,
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
    let currentQ = null;

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
        case MARK_RIGHT:
            currentDeck = state[action.deck];
            return {
                ...state,
                [action.deck]: {
                    ...currentDeck,
                    questions: {
                        ...currentDeck.questions,
                        [action.qid]: {
                            ...currentDeck.questions[action.qid],
                            correct: true,
                        }
                    }
                }
            }
        case MARK_WRONG:
            currentDeck = state[action.deck];
            return {
                ...state,
                [action.deck]: {
                    ...currentDeck,
                    questions: {
                        ...currentDeck.questions,
                        [action.qid]: {
                            ...currentDeck.questions[action.qid],
                            correct: false,
                        }
                    }
                }
            }
		default:
			return state
	}
}

export default entries;