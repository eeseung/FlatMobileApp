import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Dimensions} from "react-native";
import { ComposeButton } from "./ComposeButton";

export const ComposePage = () => {
    return (
        <View style={styles.composeButtons}>
            <ComposeButton name={"녹음하기"}/>
            <ComposeButton name={"악보 가져오기"}/>
            <ComposeButton name={"무료 BGM"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    composeButtons: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
