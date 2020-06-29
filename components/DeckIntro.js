import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddCard from './AddCard';

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

export default class DeckIntro extends Component {
    state = {

    };

    cardCount = () => {
        // some code dupe here...hmm think about this
        const { deckObj } = this.props.route.params;
        return DECK_DATA[deckObj.title].questions.length;
    }
    
    render() {
        const { route, navigation } = this.props;
        const { deckObj } = route.params;

        return (
        <View style={styles.introWrapper}>
            <Text style={styles.deckTitle}>
                {deckObj.title}
            </Text>
            <Text style={styles.cardCount}>
                {`${this.cardCount()} cards`}
            </Text>
            <TouchableOpacity 
                style={styles.addButton}
                onPress={() => {
                    navigation.push('Add Card')
                }}
                >
                <Text>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.startButton}
                onPress={() => {
                    navigation.push('Card',
                        {
                            qList: DECK_DATA[deckObj.title].questions,    
                        }
                    )
                }}
                >
                <Text>Start</Text>
            </TouchableOpacity>
        </View> );
    }
}

const styles = StyleSheet.create({
    introWrapper: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
    },
    startButton: {
        backgroundColor: 'grey',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
    } 
});
