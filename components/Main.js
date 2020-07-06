import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from './DeckList';
import DeckIntro from './DeckIntro';
import Card from './Card';
import AddCard from './AddCard';

const Stack = createStackNavigator();

export default function Main () {
    return (

          <Stack.Navigator initialRouteName="All Decks">
            <Stack.Screen name="All Decks" component={DeckList}/>
            <Stack.Screen name="DeckIntroNav" component={DeckIntro}/>
            <Stack.Screen name="Card" component={Card}/>
            <Stack.Screen name="Add Card" component={AddCard}/>
          </Stack.Navigator>

    );
}