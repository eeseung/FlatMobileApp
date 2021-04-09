
import React, { useState } from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TobBarExample from "./src/components/tabbar/TobBarExample";
import Tab2 from "./src/components/tabbar/Tab2";
import Tab3 from "./src/components/tabbar/Tab3";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { ComposePage } from "./src/components/ComposePage";

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
  );
};
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
      <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#FFFFFF',
            activeBackgroundColor: '#101010',
            inactiveBackgroundColor: '#101010',
          }}
          // tabBar={props => <MyTabBar {...props} />}
      >
        <Tab.Screen
            name="home"
            component={TobBarExample}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen
            name="free"
            component={Tab2}
            options={{
              tabBarLabel: 'FreeBGM',
              tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name="music" color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen
            name="music"
            component={ComposePage}
            options={{
              tabBarLabel: 'Music',
              tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                      name="plus-circle"
                      color={color}
                      size={size}
                  />
              ),
            }}
        />
        <Tab.Screen
            name="community"
            component={TobBarExample}
            options={{
              tabBarLabel: '커뮤니티',
              tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name="message" color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen
            name="page"
            component={TobBarExample}
            options={{
              tabBarLabel: 'MyPage',
              tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
        />
      </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
