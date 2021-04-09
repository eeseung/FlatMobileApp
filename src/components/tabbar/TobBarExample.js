import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopBar from './TopBar';

const TobBarExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <TopBar />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Screen</Text>
      </View>
    </View>
  );
};
export default TobBarExample;
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#C2185B',
  },
  container: {
    flex: 1,
  },
});
