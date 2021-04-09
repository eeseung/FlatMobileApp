import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.flat}>Flat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flat: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderBottomColor: '#8E8E8E',
  },
});

export default TopBar;
