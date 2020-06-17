import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Deck from './Deck';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CardA extends Component {
    render() {
        const { navigation }  = this.props;
        const answer = navigation.getParam('answer');

        return (
            <View style={styles.card}>
                <Text style={styles.questionText}>
                    {answer}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: 'center',
    },
    answerLink: {
        padding: 10,
    },
    questionText: {
        fontSize: 30,
        padding: 10,
    },
    correctButton: {
        backgroundColor: "#00ff00",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
    },
    incorrectButton: {
        backgroundColor: "#ff0000",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center',
    },
});
