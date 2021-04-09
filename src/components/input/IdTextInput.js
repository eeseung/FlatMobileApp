import React, {Component} from 'react';
import {View, StyleSheet, TextInput, PixelRatio, Image} from "react-native"

//id, password 등에 따라서 다르게 하는게 나의 목표

const LineName = {
    'ID' : 'id',
    'PASSWORD' : 'password'
}

const IdTextInput = () => {
    this.state = {
        lineName: "",
        isIdFocus: false,
    }
    return (
        <View style={styles.elem}>
            {/*id*/}
            <Image
                source = {require('../../image/user.png')}
            />
            <TextInput
                style={[styles.idInput, this.state.isIdFocus ? styles.idFocusState : false, {fontSize: PixelRatio.getPixelSizeForLayoutSize(6)}]} // 삼항연산자
                value={this.state.lineName}
                onChangeText={(lineName) => this.setState({lineName: lineName})}
                placeholder={this.props.LineName}
                placeholderTextColor="#8E8E8E"
                onFocus={() => this.setState({isIdFocus: true})}
                onBlur={() => {
                    this.setState({isIdFocus: false})
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
    idInput: {
        width: "60%",
        margin: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#8E8E8E',
        color: '#FFFFFF',
        paddingLeft : 10
    },
    idFocusState: {
        borderBottomColor: '#51cdde',
    },
});

export default IdTextInput;