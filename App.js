import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlashcardStatusBar from './components/FlashcardStatusBar';
import { blue } from './utils/colors';
import Navigator from './navigator/Navigator';
import Card from './components/Card';

// TODO: DeckScreen will become navigator
export default function App() {
  return (
      <Fragment>
        <FlashcardStatusBar 
                  backgroundColor={blue} 
                  barStyle='light-content'/>
        <Card/>
      </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
