import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CardButton from './CardButton';
import { 
    incrementIndex,
    resetIndex,
    markRight,
    markWrong } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuestionCircle,
        faCheckCircle, 
        faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

const greenColor = "#5fb648";
const redColor = "#ff5959";
const iconSize = 40;

class Card extends Component {
    state = {
        showFront: true,
        showScore: false,
        correct: null,
        borderColor: null,
    };

    componentDidMount () {
        // get needed pieces of state to restore correct appearance
        // if we are in the middle of a deck
        const { route, deckData, navigation, currentIdx, qList } = this.props;
        const { deckTitle } = route.params;

        const correct = qList[currentIdx].correct;

        let borderColor = '#000';
        if (correct === true) {
            borderColor = greenColor;
        } else if (correct === false) {
            borderColor = redColor;
        }

        this.setState({ 
            correct,
            borderColor,
        });
    }

    getScoreAndAttempts = () => {
        const { route, deckData } = this.props;
        const { deckTitle } = route.params;

        const curDeck = deckData[deckTitle].questions;

        const attemptList = Object.keys(curDeck).map((k) => curDeck[k]).filter((q) => (q.correct !== null));

        const correctList = attemptList.filter((q) => (q.correct === true));

        return { 
            curScore: correctList.length,
            attempts: attemptList.length };
    };

    flipCard = () => {
        this.setState((cs) => ({
            showFront: !cs.showFront,
        }))
    };

    showScore = () => {
        this.setState((cs) => ({
            showScore: true,
        }))
    };

    nextCard = () => {
        const { route, dispatch } = this.props;
        const { deckTitle } = route.params;
        dispatch(incrementIndex(deckTitle));
        this.setState((cs) => ({
            // currentIdx: cs.currentIdx+1,
            // TODO: redux update
            correct: null, // todo: move this to redux too
            showFront: true,
            borderColor: null,
        }))
    };

    resetDeck = () => {
        const { route, dispatch } = this.props;
        const { deckTitle } = route.params;
        dispatch(resetIndex(deckTitle));
        this.setState((cs) => ({
            correct: null,
            showScore: false,
            borderColor: null,
        }))
    };

    handleCorrect = () => {
        const { route, currentIdx, dispatch, qList } = this.props;
        const { deckTitle } = route.params;
        dispatch(markRight(deckTitle, qList[currentIdx].qid))
        this.setState(() => ({
            correct: true,
            borderColor: greenColor,
        }));
    }

    handleIncorrect = () => {
        const { route, currentIdx, dispatch, qList } = this.props;
        const { deckTitle } = route.params;
        dispatch(markWrong(deckTitle, qList[currentIdx].qid))
        this.setState(() => ({
            correct: false,
            borderColor: redColor,
        }));
    }
    
    render() {
        const { route, deckData, navigation, currentIdx, qList } = this.props;
        const { deckTitle } = route.params;
        const { correct } = this.state;
        const qObj = qList[currentIdx];

        const correctFontWeight = correct ? 'bold' : 'normal';
        const incorrectFontWeight = (correct === false) ? 'bold' : 'normal';

        const frontMatter = (
            <View style={styles.cardMiddleInner}>
                <Text style={styles.questionText}>
                    { qObj.question }
                </Text>
                <CardButton buttonCallback={this.flipCard}
                    buttonText="Show Answer"
                    width={180}
                />
            </View>
        );

        const backMatter = (
            <View style={styles.cardMiddleInner}>
                <Text style={styles.answerText}>
                    { qObj.answer }
                </Text>
                <CardButton buttonCallback={this.flipCard}
                    buttonText="Show Question"
                    width={180}
                />
            </View>
        );

        const { curScore, attempts } = this.getScoreAndAttempts();

        const card = (
            <View style={[styles.cardWrapper, 
            {borderColor: this.state.borderColor}]}>
                <View id="card-top" style={styles.cardTop}>
                <Text>
                    {`Card: ${currentIdx + 1}/${qList.length}`}
                </Text>
                <Text>
                    {`Score: ${curScore}/${attempts}`}
                </Text>
                </View>
                <View style={styles.cardIconContainer}>
                    {(this.state.correct === null && <FontAwesomeIcon icon={faQuestionCircle} size={iconSize}
                    />)}
                    {(this.state.correct === true && <FontAwesomeIcon icon={faCheckCircle} 
                    size={iconSize}
                    color={greenColor}
                    />)}
                    {(this.state.correct === false && <FontAwesomeIcon icon={faExclamationCircle} size={iconSize}
                    color={redColor}
                    />)}
                </View>
                <View id="card-middle" style={styles.cardMiddle}>
                    {(this.state.showFront) ? frontMatter : backMatter }
                </View>
                <View style={styles.markingButtons}>
                    <CardButton buttonCallback={this.handleCorrect}
                        buttonText="Correct"
                        buttonColor={greenColor}
                        fontWeight={correctFontWeight}
                    />
                    <CardButton buttonCallback={this.handleIncorrect}
                        buttonText="Incorrect"
                        buttonColor={redColor}
                        fontWeight={incorrectFontWeight}
                    />
                </View>
                <View id="card-bottom" style={styles.cardBottom}>
                <CardButton buttonCallback={this.resetDeck}
                        buttonText="Reset Deck"
                        buttonColor="#ddd"
                        fontWeight='normal'
                        width={120}
                    />
                {
                    (correct != null) && 
                        (qList.length > currentIdx+1)
                        && (<CardButton buttonCallback={this.nextCard}
                        buttonText="Next card"/>)
                }
                {
                    (correct != null) &&
                        (qList.length === currentIdx+1) && (<CardButton buttonCallback={this.showScore}
                        buttonText="Show score"/>)    
                }
                </View>   
            </View>
        );

        
        const score = (
            <View style={styles.cardWrapper}>
                <View style={styles.scoreMiddle}>
                    <View style={styles.scoreMiddleInner}>
                    <Text style={styles.scoreText}>{`Final score: ${curScore} / ${attempts}`}</Text>
                    <Text style={styles.scoreText}>{`(${(curScore * 100.0 / attempts).toFixed(2)}%)`}</Text>
                    </View>
                </View>
                <View style={styles.cardBottom}>
                    <CardButton buttonCallback={this.resetDeck}
                            buttonText="Restart Quiz"
                            fontWeight='normal'
                            width={120}
                        />
                    <CardButton buttonCallback={() => {
                        navigation.goBack()
                        }}
                        buttonText="Back to Deck"
                        width={120}
                    />
                </View>
            </View>
        );

        if (this.state.showScore) {
            // user has completed a Deck today
            clearLocalNotification()
            .then(setLocalNotification);
            
            return score;
        } else {
            return card;
        }
    }
}

function mapStateToProps(store, ownProps) {
    const { deckTitle } = ownProps.route.params;
    const currentIdx = store[deckTitle].currentIdx;
    const qObj = store[deckTitle].questions;

    // map to list sorted by timestamp
    function sortByTime(a, b) {
        if (a.timestamp < b.timestamp) {
            return -1;
        }
        if (a.timestamp > b.timestamp) {
            return 1;
        }
        return 0;
    }

    const keys = Object.keys(qObj)
    const qList = keys.map((k) => (
        {
            ...qObj[k],
            qid: k,
        }
        
        )).sort(sortByTime)

    return {
        deckData: store,
        currentIdx,
        qList,
    };
}

export default connect(mapStateToProps)(Card);

// export default Card;

const styles = StyleSheet.create({
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    cardIconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardMiddle: {
        flex: 3,
    },
    cardMiddleInner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    markingButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    cardBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
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
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    answerText: {
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    },
    questionText: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center',
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
    scoreMiddle: {
        flex: 5,
        justifyContent: 'center',
    },
    scoreMiddleInner: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        fontSize: 20,
    }
});
