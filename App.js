import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckScreen from './screens/DeckScreen';
import FlashcardStatusBar from './components/FlashcardStatusBar';
import { blue } from './utils/colors';

// TODO: DeckScreen will become navigator
export default function App() {
  return (
      <View>
        <FlashcardStatusBar 
                  backgroundColor={blue} 
                  barStyle='light-content'/>
        <DeckScreen/>
      </View>
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
