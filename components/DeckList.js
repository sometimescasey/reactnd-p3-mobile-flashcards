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
<<<<<<< HEAD
        const { dispatch } = this.props;
=======
        const { dispatch, deckList } = this.props;
>>>>>>> master
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
<<<<<<< HEAD
        const { navigation, deckTitleList } = this.props;
=======
        const { navigation, deckList } = this.props;
>>>>>>> master
        const { ready } = this.state;

        if (!ready) {
            return <AppLoading/>
        }

        return (
            <View style={[styles.deckList, styles.deckListBorder]}>
<<<<<<< HEAD
                    {deckTitleList.map((d) => (
=======
                    {deckList.map((d) => (
>>>>>>> master
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
<<<<<<< HEAD
    const deckTitleList = Object.keys(store).map((deck) => ({title: deck}));
	return {
        deckTitleList,
=======
    const deckList = Object.keys(store).map((deck) => ({title: deck}));
	return {
        deckList,
>>>>>>> master
        navigation: ownProps.navigation,
	};
}

export default connect(mapStateToProps)(DeckList);
