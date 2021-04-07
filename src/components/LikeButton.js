import React, { useState } from 'react';
import type {Node} from 'react';
import { Pressable, Image } from 'react-native';

const LikeButton: () => Node = ( { toggleButton } ) => {
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

export default LikeButton;
