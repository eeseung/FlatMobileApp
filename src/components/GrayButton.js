import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const GrayButton = ({ name }) => {
    return (
        <Pressable
            style={({pressed}) => [
                { backgroundColor: pressed ? '#2E2E2E' : '#101010' }, styles.grayButton]}>
            <Text style={styles.text}>
                { name }
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    grayButton: {
        width: 160,
        height: 35,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: 'white',
    },
});

export default GrayButton;
