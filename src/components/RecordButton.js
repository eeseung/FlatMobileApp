import React, {useState} from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const RecordButton = ({ name }) => {
    return (
        <Pressable>
                {({ pressed }) => (
                    <LinearGradient
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                    colors={['#54DE51','#51CDDE']}
                                    style={ styles.recordButton }>
                    <Text style= {[
                        { color : pressed ? 'black' : 'white' },
                        styles.text,
                    ]}>
                        { name }
                    </Text>
                    </LinearGradient>
                )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    recordButton: {
        width: 221,
        height: 60,
        borderRadius: 6,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
    },
});
