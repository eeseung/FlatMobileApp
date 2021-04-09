import React, {Component, useState} from 'react';
import {View, StyleSheet, TextInput, PixelRatio, Image} from "react-native"

const SmallBox = () =>{
    const [state, setState] = useState({isCommentFocus:false, comment:""});

    return(
        <View style={styles.elem}>
            <TextInput
                underlineColorAndroid='transparent'
                style={[styles.commentInput, this.state.isCommentFocus ? styles.boxFocusState : false]}
                value={this.state.comment}
                onChangeText={(comment) => this.setState({comment: comment})}
                placeholder=""
                onFocus={() => this.setState({isCommentFocus: true})}
                onBlur={() => {
                    this.setState({isCommentFocus: false})
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    elem:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
    },

    commentInput: {
        width: "80%",
        height: PixelRatio.getPixelSizeForLayoutSize(10),
        margin: 5,
        borderRadius: 5,
        borderColor: '#8E8E8E',
        backgroundColor: '#2E2E2E',
        color: '#FFFFFF'
    },

    boxFocusState: {
        borderWidth: 2,
        borderBottomColor: '#51cdde',
        borderColor: '#51cdde'
    }
});
export default SmallBox;