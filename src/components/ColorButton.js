import React from 'react';
import type {Node} from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const ColorButton: () => Node = ({text}) => {
    return (
        <Pressable
            style={({pressed}) => [
                { backgroundColor: pressed ? '#51CDDE' : '#101010' }, styles.colorButton ]}>
            {({ pressed }) => (
                <Text style= {[ {color : pressed ? 'black' : 'white'}, styles.text ]}>
                    {text}
                </Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    colorButton: {
        width: 160,
        height: 35,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#51CDDE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
    },
});

export default ColorButton;
