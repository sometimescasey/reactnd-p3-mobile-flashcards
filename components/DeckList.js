import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import Deck from './Deck';
import { getInitialData } from '../utils/api';
import { receiveData } from '../actions';

class DeckList extends Component {
    state = {
        ready: false,
    }
    
    // note: componentDidMount is not called
    // upon simulator live refresh; odd quirk
    // of hitting save on certain files (i.e. reducer)
    componentDidMount() {
        const { dispatch } = this.props;
        const { ready } = this.state;

        if (!ready) {
            getInitialData()
            .then(
                (data) => dispatch(receiveData(data))
            )
            .then(() => {
                this.setState({ ready: true});
            })
        }
    }

    render() {
        const { navigation, deckTitleList } = this.props;
        const { ready } = this.state;

        if (!ready) {
            return <AppLoading/>
        }

        return (
            <View style={[styles.deckList, styles.deckListBorder]}>
                    {deckTitleList.map((d) => (
                        <Deck deckObj={d} key={d.title} navigation={navigation}/>
                    ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckListBorder: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
    },
    deckList: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

function mapStateToProps(store, ownProps) {
    const deckTitleList = Object.keys(store).map((deck) => ({title: deck}));
	return {
        deckTitleList,
        navigation: ownProps.navigation,
	};
}

export default connect(mapStateToProps)(DeckList);
