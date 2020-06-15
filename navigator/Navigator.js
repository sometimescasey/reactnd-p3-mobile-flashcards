import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import DeckScreen from '../screens/DeckScreen';
import NewDeckScreen from '../screens/NewDeckScreen';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { purple, white } from '../utils/colors';

const InnerNavigator = createBottomTabNavigator(
    routes={
        "Main": {
            screen: MainScreen,
            navigationOptions: {
                tabBarLabel: 'History',
                tabBarIcon: ({ tintColor }) => (<FontAwesome
                    name="home"
                    size={30}
                    color={tintColor}/>)
            }},
        "Add Entry": {
            screen: AddEntryScreen,
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
        "Live": {
            screen: LiveScreen,
            navigationOptions: {
                tabBarLabel: 'Live',
                tabBarIcon: ( { tintColor } ) => (
                    <FontAwesome
                        name="compass"
                        size={30}
                        color={tintColor}/>
                )
            }
        },
        // "Anim": {
        //     screen: AnimatedScreen,
        //     navigationOptions: {
        //         tabBarLabel: 'Anim',
        //         tabBarIcon: ( { tintColor } ) => (
        //             <FontAwesome
        //                 name="thermometer"
        //                 size={30}
        //                 color={tintColor}/>
        //         )
        //     }
        // },
        "Pick image": {
            screen: ImageScreen,
            navigationOptions: {
                tabBarLabel: 'PkImg',
                tabBarIcon: ( { tintColor } ) => (
                    <FontAwesome
                        name="camera"
                        size={30}
                        color={tintColor}/>
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
            activeTintColor: Platform.OS === 'ios' ? purple : white,
            style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? white : purple,
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

export default connect()(createAppContainer(InnerNavigator));