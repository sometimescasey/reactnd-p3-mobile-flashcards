import React from 'react';
import Main from '../components/Main';
import AddDeck from '../components/AddDeck';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
    const screenOptionsConfig = ({route}) => ({
        tabBarIcon: ( { focused, color, size } ) => {
            let iconName;

            if (route.name === "Main") {
                iconName = 'ios-home';
            } else if (route.name === "Add Deck") {
                iconName = 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color}/>;
        },
    });

    return (
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Main"
          screenOptions={screenOptionsConfig}>
            <Tab.Screen name="Main" component={Main}
            />
            <Tab.Screen name="Add Deck" component={AddDeck}/>
          </Tab.Navigator>
        </NavigationContainer>
    );
}