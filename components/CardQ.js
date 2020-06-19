import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Deck from './Deck';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class CardQ extends Component {
    render() {
        const { navigation }  = this.props;
        const cardObj = navigation.getParam('cardObj');
        const question = cardObj.question;
        const answer = cardObj.answer;

        return (
            <View style={styles.card}>
                <Text style={styles.questionText}>
                    { question }
                </Text>
                <Button
                    style={styles.answerLink}
                    onPress={() => {
                        navigation.navigate({
                            routeName: 'Answer',
                            params: {
                                answer: answer,
                            }
                        });
                    }}
                    title="Answer link"
                    />
                
                <TouchableOpacity style={styles.correctButton}>
                    <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.incorrectButton}>
                    <Text>Incorrect</Text>
                </TouchableOpacity>
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
