import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import CardButton from './CardButton';

function AddDeck (props) {
    
    const [ deckName, setDeckName ] = useState('');
    const [ submittedDeck, setSubmittedDeck ] = useState(null);
    const [ submitFailed, setSubmitFailed ] = useState(false);

    useEffect(() => {
        // clear info about submitted deck when user navigates away
        const unsubscribe = navigation.addListener('blur', () => {
          setSubmittedDeck(null);
        });
    
        return unsubscribe;
      }, [props.navigation]);

    const { deckData, navigation } = props;
    console.log("---navigation---: ", navigation);

    const handleSubmit = () => {
        const { dispatch } = props;
        // best practice: make this a redux-thunk promise
        const returnedAction = dispatch(addDeck(deckName));

        if (returnedAction.deckName) {
            setSubmittedDeck(returnedAction.deckName);
            setDeckName('');
        } else {
            setSubmitFailed(true);
        }

    };

    const backToMainList = () => {

    };

    const buttonDisabled = (deckName.trim() === '') || (deckName.trim() in deckData); 

    return (
        <View style={styles.addDeckWrapper}>
            <Text>New deck</Text>
            <TextInput style={styles.deckInput}
                value={deckName}
                onChangeText={text => setDeckName(text)}
                placeholder="Enter name of deck"
                />
            <CardButton
                buttonCallback={handleSubmit}
                buttonText="Submit"
                disabled={buttonDisabled}
                />
            { (deckName.trim() in deckData) && 
            <Text>
                {`${deckName.trim()} is already taken - choose another name`}
            </Text>}
            {(submittedDeck) && 
            <View style={styles.success}>
                <Text>
                    Saved new Deck:
                </Text>
                <Text style={styles.submittedDeck}>
                    {submittedDeck}
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

function mapStateToProps(store) {
    return {
        deckData: store,
    };
}

export default connect(mapStateToProps)(AddDeck);

const styles = StyleSheet.create({
    deckInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    },
    addDeckWrapper: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        margin: 10,
        padding: 10,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    submittedDeck: {
        fontSize: 20,
    }
});