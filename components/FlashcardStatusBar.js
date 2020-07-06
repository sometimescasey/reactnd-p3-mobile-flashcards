import * as React from 'react';
import { View, StatusBar } from 'react-native';
import Constants from 'expo-constants';

function FlashcardStatusBar ({ backgroundColor, ...props }) {
    return (
        <View style={{ 
            backgroundColor, 
            height: Constants.statusBarHeight }}>
            <StatusBar 
                translucent
                backgroundColor={backgroundColor}
                {...props} />
        </View>
    );
}

export default FlashcardStatusBar;