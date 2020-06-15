import AsyncStorage from '@react-native-community/async-storage';

export const DECK_STORAGE_KEY = 'MobileFlashcards:deck'

export function getDecks() {
    // return all decks along with titles, questions, answers
}

export function getDeck(id) {
    // take single id and return deck 
}

export function saveDeckTitle(title) {
    // take in title and save new deck
}

export function addCardToDeck(title, card) {
    // take in a card and add to deck with associated title
}

// export function fetchCalendarResults() {
// 	// AsyncStorage.clear();
// 	return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
// 		.then((r) => {

// 			return formatCalendarResults(r);
// 		});
// }

// export function submitEntry({ entry, key}) {
// 	return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
// 		[key]: entry
// 	}));

// }

// export function removeEntry(key) {
// 	return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
// 	.then((results) => {
// 		const data = JSON.parse(results);
// 		data[key] = undefined;
// 		delete data[key];
// 		AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
// 	})

// }