import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import DeckScreen from '../screens/DeckScreen';
import NewDeckScreen from '../screens/NewDeckScreen';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { blue, cyan } from '../utils/colors';

const Navigator = createBottomTabNavigator(
    routes = {
        "Main": DeckScreen,
        "New Deck": NewDeckScreen,
    },
    config = {}
);


export default createAppContainer(Navigator);