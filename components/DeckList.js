import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Deck from './Deck';

// TODO: hardcode, replace with data later
const DECK_LIST = [
    {title: "React"}, 
    {title: "JavaScript"}
]

export default class DeckList extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={[styles.deckList, styles.deckListBorder]}>
                    {DECK_LIST.map((d) => (
                        <Deck deckObj={d} key={d.title} navigation={navigation}/>
                    ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckListBorder: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
    },
    deckList: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});
