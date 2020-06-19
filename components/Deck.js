import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 // TODO: hardcode, replace with data later (redux store, give this connect access)
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
    render() {
        const { deckObj, navigation } = this.props;
        console.log(deckObj);
        return (
                <View style={styles.card}>
                    <TouchableOpacity style={styles.clickable} 
                        onPress={() => {
                            navigation.navigate({
                                routeName: 'Card',
                                params: {
                                    // TODO: don't just take first question
                                    // write a card list
                                    cardObj: DECK_DATA[deckObj.title].questions[0],
                                }
                            })
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
    },
    clickable: {
        
    }
});
