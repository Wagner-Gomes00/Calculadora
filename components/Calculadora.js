import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ value, onPress, color = '#333', textColor = '#fff', flex = 1 }) => (
    <TouchableOpacity
        style={[styles.button, { backgroundColor: color, flex }]}
        onPress={onPress}
    >
        <Text style={[styles.buttonText, { color: textColor }]}>{value}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        height: 80,
        margin: 5,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
    },
});

export default Button;
