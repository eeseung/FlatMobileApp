
import React, {useState} from 'react';
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

// import { Album } from "./src/components/Album";
// import { Profile } from "./src/components/Profile";


import { Album } from "./src/components/Album";
import { Profile } from "./src/components/Profile";
import { PlayButton } from "./src/components/PlayButton";
import { ColorButton } from "./src/components/ColorButton";
import { GrayButton } from "./src/components/GrayButton";
import { RecordButton } from "./src/components/RecordButton";
import { RecordingButton } from "./src/components/RecordingButton";
import { LikeButton } from "./src/components/LikeButton";
import { EditPage } from "./src/components/EditPage";


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>

    // <ScrollView>
    //   <View>
    //     <ScrollView>
    //       <EditPage/>
    //       <View >
    //         <Profile size={'SMALL'} imgURL={''}/>
    //         <Profile size={'MEDIUM'} imgURL={''}/>
    //         <Profile size={'LARGE'} imgURL={''}/>
    //         <Album state={'PLAY_SMALL'}/>
    //         <Album title={'제목'} state={'LIKE_LARGE'} description={'블라블라'} time={'3:02'} artist={'소지'} liked={true}/>
    //         <Album state={'LIKE_SMALL'} liked={true}/>
    //         <Album state={'PLAY_LARGE'}/>
    //         <ColorButton name={'로그인'}/>
    //         <GrayButton name={'회원가입'}/>
    //         <RecordButton name={'녹음하기'}/>
    //         <RecordingButton/>
    //         <LikeButton/>
    //         <PlayButton/>
    //       </View>
    //     </ScrollView>
    //   </View>
    // </ScrollView>

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
            component={Tab3}
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
