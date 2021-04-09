/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
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

import { Album } from "./src/components/Album";
import { Profile } from "./src/components/Profile";
import { PlayButton } from "./src/components/PlayButton";
import { ColorButton } from "./src/components/ColorButton";
import { GrayButton } from "./src/components/GrayButton";
import { ComposeButton } from "./src/components/ComposeButton";
import { RecordButton } from "./src/components/RecordButton";
import { LikeButton } from "./src/components/LikeButton";
import { EditPage } from "./src/components/EditPage";
import { ComposePage } from "./src/components/ComposePage";

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView style={{backgroundColor: '#101010'}}>
      <View>
        <ScrollView>
          {/*<ComposePage/>*/}
          <EditPage/>
          {/*<View >*/}
          {/*  <Profile size={'SMALL'} imgURL={''}/>*/}
          {/*  <Profile size={'MEDIUM'} imgURL={''}/>*/}
          {/*  <Profile size={'LARGE'} imgURL={''}/>*/}
          {/*  <Album state={'PLAY_SMALL'}/>*/}
          {/*  <Album title={'제목'} state={'LIKE_LARGE'} description={'블라블라'} time={'3:02'} artist={'소지'} liked={true}/>*/}
          {/*  <Album state={'LIKE_SMALL'} liked={true}/>*/}
          {/*  <Album state={'PLAY_LARGE'}/>*/}
          {/*  <ColorButton name={'로그인'}/>*/}
          {/*  <GrayButton name={'회원가입'}/>*/}
          {/*  <ComposeButton name={'녹음하기'}/>*/}
          {/*  <RecordButton/>*/}
          {/*  <LikeButton/>*/}
          {/*  <PlayButton/>*/}
          {/*</View>*/}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

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
