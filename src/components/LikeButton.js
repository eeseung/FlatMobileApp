import React, { useState } from 'react';
import { Pressable, Image } from 'react-native';

export const LikeButton = ( { toggleButton } ) => {
    const [state, setState] = useState({
        like: false, uri: require('../../assets/icons/like.png')
    });

    toggleButton = () => {
        if ( !state.like ) {
            setState({
                like: true,
                uri: require('../../assets/icons/like_fill.png')
            })}
        else { setState(
            { like: false,
                uri: require('../../assets/icons/like.png')
            })}
    };

    return (
        <Pressable onPressOut = {() => toggleButton()}>
            <Image source={ state.uri } />
        </Pressable>
    );
};
