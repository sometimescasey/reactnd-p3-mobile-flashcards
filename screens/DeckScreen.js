import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeckList from '../components/DeckList';

export default class DeckScreen extends Component {
    render() {
        return (
            <View>
                <DeckList/>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
});
