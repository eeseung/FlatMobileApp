import React, { useState } from 'react';
import type {Node} from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const ItemButton: () => Node = ({text, toggleButton}) => {
    const [state, setState] = useState({
        selected: false, background: '#101010', color: 'white'
    });

    toggleButton = () => {
        if ( !state.selected ) {
            setState({ selected: true, background: '#51CDDE', color:'black' })}
        else { setState({ selected: false, background: '#101010', color:'white' })}
    };

    return (
        <Pressable onPressOut = {() => toggleButton()}
            style={[{ backgroundColor: state.background }, styles.colorButton ]}>
            <Text style= {[{ color: state.color }, styles.text]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    colorButton: {
        width: 120,
        height: 111,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default ItemButton;
