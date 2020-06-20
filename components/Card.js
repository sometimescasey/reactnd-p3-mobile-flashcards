import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardButton = ({ buttonCallback, buttonText }) => {
    return (
        <TouchableOpacity 
            style={styles.cardButton}
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
    
    render() {
        const { route, navigation } = this.props;
        const { qList } = route.params;
        const { currentIdx } = this.state;
        const qObj = qList[currentIdx];

        const front = (
            <View style={styles.cardWrapper}>
                <Text style={styles.questionText}>
                    { qObj.question }
                </Text>
                    <CardButton buttonCallback={this.flipCard}
                        buttonText="Show answer"
                    />
                    {
                        (qList.length > this.state.currentIdx+1) 
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
