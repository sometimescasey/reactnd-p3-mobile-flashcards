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
        disabled=false,
    } = props;

    const disabledBgColor = "#ddd";

    const buttonStyle = disabled ? styles.disabledButtonText : styles.buttonText;
    const buttonBgColor = disabled ? disabledBgColor : buttonColor;

    return (
        <TouchableOpacity
            disabled={disabled} 
            style={[
                styles.cardButton,
                {
                    backgroundColor: buttonBgColor,
                    width,
                }
                ]}
            onPress={() => {
                buttonCallback();
            }}>
            <Text style={[buttonStyle, {fontWeight: fontWeight,
            textAlign: 'center'}]}>
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
    buttonText: {
        color: 'black',
    },
    disabledButtonText: {
        color: 'grey',
    }  
});