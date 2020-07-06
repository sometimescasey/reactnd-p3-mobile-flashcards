import React, { Component } from 'react';
import FlashcardStatusBar from './components/FlashcardStatusBar';
import { blue } from './utils/colors';
import RootNavigator from './navigation/RootNavigator';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import middleware from './middleware';

import { setLocalNotification } from './utils/helpers';

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render () {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <FlashcardStatusBar 
                  backgroundColor={blue} 
                  barStyle='light-content'/>
        <RootNavigator/>
      </Provider>
    );
  }
  
}
