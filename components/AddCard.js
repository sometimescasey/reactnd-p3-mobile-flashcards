import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import CardButton from './CardButton';

function AddCard (props) {
    const [ question, setQuestion ] = useState('');
    const [ answer, setAnswer ] = useState('');

    const [ submittedQ, setSubmittedQ ] = useState(null);
    const [ submittedA, setSubmittedA ] = useState(null);

    const [ submitFailed, setSubmitFailed ] = useState(false);

    const handleSubmit = () => {
        const { route, dispatch } = props;
        const { deckTitle } = route.params;
        // dispatch addcard method
        // go back to main screen
        const card = { question, answer };
        // best practice: make this a redux-thunk promise
        const returnedAction = dispatch(addCard(deckTitle, card));

        if (returnedAction.card.question && returnedAction.card.answer) {
            setSubmittedQ(returnedAction.card.question);
            setSubmittedA(returnedAction.card.answer);
            setQuestion('');
            setAnswer('');
        } else {
            setSubmitFailed(true);
        }

    };

    const buttonDisabled = (question.trim() === '') || (answer.trim() === ''); 

    return (
        <View style={styles.addCardWrapper}>
            <Text>Question</Text>
            <TextInput style={styles.qInput}
                value={question}
                onChangeText={text => setQuestion(text)}
                placeholder="Enter question"
                />
            <Text>Answer</Text>
            <TextInput style={styles.aInput}
                value={answer}
                onChangeText={text => setAnswer(text)}
                placeholder="Enter answer"
                />
            <CardButton
                buttonCallback={handleSubmit}
                buttonText="Submit"
                disabled={buttonDisabled}
                />
            {(submittedQ && submittedA) && 
            <View style={styles.success}>
                <Text>
                    Saved card:
                </Text>
                <Text style={styles.submittedQ}>
                    {submittedQ}
                </Text>
                <Text style={styles.submittedA}>
                    {submittedA}
                </Text>

            </View>}
            {( submitFailed && 
            <View>
                <Text>
                    Submit failed, try again
                </Text>

            </View>)}
        </View>
    );
}

export default connect()(AddCard);

const styles = StyleSheet.create({
    qInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10,
    },
    aInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10,
    },
    submitButton: {
        backgroundColor: 'grey',
        margin: 10,
    },
    success: {
        marginTop: 10,
        alignItems: 'center',
    },
    submittedQ: {
        fontSize: 20,
        marginTop: 10,
    },
    submittedA: {
        marginTop: 10,
    },
    addCardWrapper: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        margin: 10,
        padding: 10,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});