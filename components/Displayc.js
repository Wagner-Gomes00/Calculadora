import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ value }) => (
    <View style={styles.display}>
        <Text style={styles.displayText}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    display: {
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    displayText: {
        fontSize: 60,
        color: '#fff',
    },
});

export default Display;
