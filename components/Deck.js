import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Deck extends Component {
    render() {
        const { deckObj } = this.props;
        return (
                <View style={styles.card}>
                    <Text style={styles.deckTitle}>{ deckObj.title }</Text>
                    <Text>This is a deck</Text>
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
    // cardShadow: {
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //     elevation: 5,
    // },
    deckTitle: {
        fontWeight: 'bold',
    }
});
