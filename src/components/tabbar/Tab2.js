import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TopBar from './TopBar';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'green'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#101010'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

// tab view


export default function Tab2() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'BGM'},
    {key: 'second', title: '좋아요'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <TopBar />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.like}
            indicatorStyle={{
              backgroundColor: '#87F8FF',
            }}
            // style={styles.container}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#C2185B',
  },
  container: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
  },
    scene: {
    flex: 1,
  },
  like: {
    padding: 8,
    backgroundColor: '#101010',
    fontSize: 10,
  },
});
