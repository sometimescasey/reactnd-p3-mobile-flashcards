import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DeckScreen from '../screens/DeckScreen';
import ToDeckNavigator from './ToDeckNavigator';
import NewDeckScreen from '../screens/NewDeckScreen';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { blue, cyan } from '../utils/colors';

const Navigator = createBottomTabNavigator(
    routes = {
        "Main": {
            screen: ToDeckNavigator,
            navigationOptions: {
                tabBarLabel: 'History',
                tabBarIcon: ({ tintColor }) => (<FontAwesome
                    name="home"
                    size={30}
                    color={tintColor}/>)
            }},
        "Add Entry": {
                screen: NewDeckScreen,
                navigationOptions: {
                    tabBarLabel: 'Add Entry',
                    tabBarIcon: ({ tintColor }) => (
                        <FontAwesome
                            name="dashboard"
                            size={30}
                            color={ tintColor }/>
                    )
                }
            }, 
    },
    config={
        navigationOptions: {
            header: null,
        },
        tabBarOptions: {
            inactiveTintColor: '#bbb',
            activeTintColor: Platform.OS === 'ios' ? blue : 'white',
            style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? 'white' : blue,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }

    }
);


export default createAppContainer(Navigator);