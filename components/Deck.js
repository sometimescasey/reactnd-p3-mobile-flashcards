import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// TODO: move to redux
export const DECK_DATA = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        },
        {
            question: 'Can functional components store state?',
            answer: 'Yes, using hooks!'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  };

export default class Deck extends Component {
    cardCount = () => {
        const { deckObj } = this.props;
        return DECK_DATA[deckObj.title].questions.length;
    }

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
                        <Text>{`${this.cardCount()} cards`}</Text>
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
