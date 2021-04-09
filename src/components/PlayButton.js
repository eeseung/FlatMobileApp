import React, { useState } from 'react';
import { Pressable, Image } from 'react-native';

export const PlayButton = ( { toggleButton } ) => {
    const [state, setState] = useState({
        playing: true, uri: require('../../assets/icons/play.png')
    });

    toggleButton = () => {
        if ( state.playing ) {
            setState({
                playing: false,
                uri: require('../../assets/icons/pause.png')
            })}
        else { setState(
            { playing: true,
                uri: require('../../assets/icons/play.png')
            })}
    };

    return (
        <Pressable onPressOut = {() => toggleButton()}>
            <Image source={ state.uri } />
        </Pressable>
    );
};


