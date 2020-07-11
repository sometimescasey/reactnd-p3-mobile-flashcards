import React, { Component } from 'react';
import FlashcardStatusBar from './components/FlashcardStatusBar';
import { blue } from './utils/colors';
import RootNavigator from './navigation/RootNavigator';
import configureStore from './configureStore';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { setLocalNotification } from './utils/helpers';

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render () {
    const { store, persistor } = configureStore();

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <FlashcardStatusBar 
                    backgroundColor={blue} 
                    barStyle='light-content'/>
          <RootNavigator/>
        </PersistGate>
      </Provider>
    );
  }
  
}
