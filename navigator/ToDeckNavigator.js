import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CardA from '../components/CardA';
import CardQ from '../components/CardQ';
import DeckScreen from '../screens/DeckScreen';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { blue, cyan } from '../utils/colors';

const ToDeckNavigator = createStackNavigator(
    routes = {
        "DeckScreen": {
            screen: DeckScreen,
            navigationOptions: {
                
            }
        },
        "Card": {
            screen: CardQ,
            navigationOptions: {

            }
        },
        "Answer": {
            screen: CardA,
            navigationOptions: {

            }
        },
    },
    config={
      
    }
);


export default createAppContainer(ToDeckNavigator);