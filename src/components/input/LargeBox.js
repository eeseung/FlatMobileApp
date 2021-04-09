import React, {Component, useState} from 'react';
import {View, StyleSheet, TextInput, PixelRatio, Image} from "react-native"

const LargeBox= () => {
    const [state, setState] = useState({isSettingFocus:false, setting:""});


    return(
        <View style={styles.elem}>
            <TextInput
                underlineColorAndroid='transparent'
                style={[styles.settingInput, this.state.isSettingFocus ? styles.boxFocusState : false]}
                value={this.state.setting}
                onChangeText={(setting) => this.setState({setting: setting})}
                placeholder="자유롭게 입력하세요^.~"
                placeholderTextColor="#8E8E8E"
                onFocus={() => this.setState({isSettingFocus: true})}
                onBlur={() => {
                    this.setState({isSettingFocus: false})
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

    settingInput: {
        width: "80%",
        height: PixelRatio.getPixelSizeForLayoutSize(45),
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#8E8E8E',
        color: '#FFFFFF'

    },
    boxFocusState: {
        borderWidth: 2,
        borderBottomColor: '#51cdde',
        borderColor: '#51cdde'
    }
});

export default LargeBox;