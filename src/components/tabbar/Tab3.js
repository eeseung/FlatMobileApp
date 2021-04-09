import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#101010'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#101010'}]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#101010'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function Tab3() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '악보편집'},
    {key: 'second', title: '사운드'},
    {key: 'third', title: '장르'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (

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
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
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
