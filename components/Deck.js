import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Deck extends Component {
    render() {
        const { deckObj, navigation } = this.props;
        return (
                <View style={styles.card}>
                    <TouchableOpacity style={styles.clickable} 
                        onPress={() => {
                            navigation.push('DeckIntroNav', { 
                                screen: 'Deck Intro',
                                deckObj,
                                randoParam: 'blabla' } 
                            )
                        }}>
                        <Text style={styles.deckTitle}>{ deckObj.title }</Text>
                        <Text>This is a deck</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.5,
        marginVertical: 5,

    },
    deckTitle: {
        fontWeight: 'bold',
    },
    clickable: {
        
    }
});
