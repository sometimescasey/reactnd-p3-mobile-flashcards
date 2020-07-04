import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class Deck extends Component {
    cardCount = () => {
        const { deckData, deckObj } = this.props;
        console.log("-----deckData:", deckData);
        return Object.keys(deckData[deckObj.title].questions).length;
    }

    render() {
        const { deckObj, navigation } = this.props;
        return (
                <View style={styles.card}>
                    <TouchableOpacity style={styles.clickable} 
                        onPress={() => {
                            navigation.push('DeckIntroNav', { 
                                screen: 'Deck Intro',
                                deckObj,
                                randoParam: 'blabla' } 
                            )
                        }}>
                        <Text style={styles.deckTitle}>{ deckObj.title }</Text>
                        <Text>{`${this.cardCount()} cards`}</Text>
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
    deckTitle: {
        fontWeight: 'bold',
    },
    clickable: {
        
    }
});

function mapStateToProps(store, ownProps) {
    return {
        deckObj: ownProps.deckObj, 
        navigation: ownProps.navigation,
        deckData: store,
    };
}

export default connect(mapStateToProps)(Deck);
