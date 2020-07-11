import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';
import middleware from './middleware';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// does not work
export default function configureStore(preloadedState) {
    let store = createStore(persistedReducer, preloadedState, middleware);
    let persistor = persistStore(store);
    return { store, persistor };
}
