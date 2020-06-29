import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardButton = (props) => {
    const { 
        buttonCallback,
        buttonText, 
        buttonColor = "#ccc" } = props;

    return (
        <TouchableOpacity 
            style={[
                styles.cardButton,
                {backgroundColor: buttonColor}
                ]}
            onPress={() => {
                buttonCallback();
            }}>
            <Text>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
}

class Card extends Component {
    state = {
        showFront: true,
        currentIdx: 0, 
        // TODO: move this to redux store later so the user
        // can go back to same spot in the deck
        markedAnswer: false
    };

    flipCard = () => {
        this.setState((cs) => ({
            showFront: !cs.showFront,
        }))
    };

    nextCard = () => {
        this.setState((cs) => ({
            currentIdx: cs.currentIdx+1,
        }))
    };

    handleCorrect = () => {

    }

    handleIncorrect = () => {

    }
    
    render() {
        const { route, navigation } = this.props;
        const { qList } = route.params;
        const { currentIdx, markedAnswer } = this.state;
        const qObj = qList[currentIdx];

        const front = (
            <View style={styles.cardWrapper}>
                <Text style={styles.questionText}>
                    { qObj.question }
                </Text>
                    <CardButton buttonCallback={this.flipCard}
                        buttonText="Show answer"
                    />

                    <CardButton buttonCallback={this.handleCorrect}
                        buttonText="Correct"
                        buttonColor="#00FF00"
                    />
                    <CardButton buttonCallback={this.handleIncorrect}
                        buttonText="Incorrect"
                        buttonColor="#FF0000"
                    />

                    {
                        (qList.length > this.state.currentIdx+1)
                        && ( markedAnswer ) 
                        && (<CardButton buttonCallback={this.nextCard}
                        buttonText="Next card"/>)
                    }
                    
                    
            </View>
        );
        
        const back = (
            <View style={styles.cardWrapper}>
                <Text style={styles.answerText}>
                    { qObj.answer }
                </Text>
                    <CardButton buttonCallback={this.flipCard}
                        buttonText="Show question"
                    />
            </View>
        );

        const side = (this.state.showFront) ? front : back;

        return side;
    }
}

export default Card;

const styles = StyleSheet.create({
    cardButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    cardWrapper: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    answerText: {
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
