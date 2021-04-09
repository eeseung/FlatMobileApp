import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { ItemButton } from "./ItemButton";

export const SoundButtons = () => {
    return (
        <View style={styles.soundButtons}>
            <View style={[{alignItems: 'flex-start'}, styles.buttonsRow]}>
                <ItemButton name={"Piano"}/>
                <ItemButton name={"Drum"}/>
                <ItemButton name={"Acoustic Guitar"}/>
            </View>
            <View style={[{alignItems: 'flex-end'}, styles.buttonsRow]}>
                <ItemButton name={"Electronic Guitar"}/>
                <ItemButton name={"Saxophone"}/>
                <ItemButton name={"Violin"}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    soundButtons: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height*0.38,
        backgroundColor: '#C4C4C4',
    },
    buttonsRow: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
    }
});
