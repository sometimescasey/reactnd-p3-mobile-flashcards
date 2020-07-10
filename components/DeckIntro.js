import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddCard from './AddCard';

class DeckIntro extends Component {

    getQList = () => {
        // repeated code - think about how to clean this up
        const { deckTitle } = ownProps.route.params;
        const qObj = store[deckTitle].questions;

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
            
            )).sort(sortByTime);

            return qList;
    };

    cardCount = () => {
        const { route, deckData } = this.props;
        const { deckObj } = route.params;
        return Object.keys(deckData[deckObj.title].questions).length;
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
                    navigation.push('Add Card', {
                        deckTitle: deckObj.title,
                    })
                }}
                >
                <Text>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.startButton}
                onPress={() => {
                    navigation.push('Card',
                        {
                            deckTitle: deckObj.title,     
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
        backgroundColor: '#bbf',
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

// TODO: refactor later, apparently this doesn't even
// need to pass thru ownProps
function mapStateToProps(store, ownProps) {
    return {
        route: ownProps.route,
        navigation: ownProps.navigation,
        deckData: store.deckData,
    };
}

export default connect(mapStateToProps)(DeckIntro);