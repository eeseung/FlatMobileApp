import React, { useState } from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';

const RecordingButton = ( { toggleButton } ) => {
    const [state, setState] = useState({
        recording: true, uri: require('../../assets/icons/recording.png')
    });

    toggleButton = () => {
        if (state.recording) {
            setState({
                recording: false,
                uri: require('../../assets/icons/stop.png')
        })}
        else { setState(
            { recording: true,
                    uri: require('../../assets/icons/recording.png')
        })}
    };

    return (
        <Pressable
            onPressOut = {() => toggleButton()}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#2E2E2E' : '#101010' }, styles.colorButton ]}>
            <Image source={ state.uri } />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    colorButton: {
        width: 222,
        height: 222,
        borderRadius: 111,
        borderWidth: 15,
        borderColor: '#51CDDE',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RecordingButton;
