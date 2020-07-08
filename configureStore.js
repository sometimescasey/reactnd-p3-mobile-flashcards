import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from './reducers';
import middleware from './middleware';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore(preloadedState) {
    let store = createStore(persistedReducer, middleware);
    let persistor = persistStore(store);
    return { store, persistor };
}