import React, { Fragment } from 'react';
import FlashcardStatusBar from './components/FlashcardStatusBar';
import { blue } from './utils/colors';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return (
      <Fragment>
        <FlashcardStatusBar 
                  backgroundColor={blue} 
                  barStyle='light-content'/>
        <RootNavigator/>
      </Fragment>
  );
}
