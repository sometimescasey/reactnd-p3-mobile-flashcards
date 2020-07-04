import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CardButton(props) {
    const { 
        buttonCallback,
        buttonText, 
        buttonColor = "#ccc",
        fontWeight = 'normal',
        width = 100,
    } = props;

    return (
        <TouchableOpacity 
            style={[
                styles.cardButton,
                {
                    backgroundColor: buttonColor,
                    width,
                }
                ]}
            onPress={() => {
                buttonCallback();
            }}>
            <Text style={{fontWeight: fontWeight,
            textAlign: 'center'}}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
}

export default CardButton;

const styles = StyleSheet.create({
    cardButton: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
});