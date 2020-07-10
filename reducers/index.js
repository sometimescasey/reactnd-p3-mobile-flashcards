import deckDataReducer from './deckData';
import { combineReducers } from 'redux';

export default combineReducers({
    deckData: deckDataReducer,
});