import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddCard from './AddCard';

class DeckIntro extends Component {

    cardCount = () => {
        // some code dupe here...hmm think about this
        const { deckData } = this.props;
        const { deckObj } = this.props.route.params;
        return deckData[deckObj.title].questions.length;
    }
    
    render() {
        const { route, navigation, deckData } = this.props;
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
                            qList: deckData[deckObj.title].questions,    
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

function mapStateToProps(store, ownProps) {
    return {
        route: ownProps.route,
        navigation: ownProps.navigation,
        deckData: store,
    };
}

export default connect(mapStateToProps)(DeckIntro);