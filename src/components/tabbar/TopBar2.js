import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class TopBar2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text/>
        <Text style={styles.flat}>Flat</Text>
        <Image source={require('./save.png')} />
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
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopBar2;
