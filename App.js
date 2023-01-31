import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/Home';
import FindVerse from './src/FindVerse';
import Prayers from './src/Prayers';

const PrayersRoute = () => <Prayers />;

const HelpMePray = () => <Home />;

const FindAVerse = () => <FindVerse />;

export default function App() {
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    {
      key: 'prayers',
      title: 'Prayers',
      focusedIcon: 'hands-pray',
    },
    {
      key: 'helpMePray',
      title: 'Create A Prayer',
      focusedIcon: 'human-handsup',
    },
    { key: 'findAVerse', title: 'Find A Verse', focusedIcon: 'book-cross' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    prayers: PrayersRoute,
    helpMePray: HelpMePray,
    findAVerse: FindAVerse,
  });
  return (
    <>
      <SafeAreaProvider>
        <BottomNavigation
          renderScene={renderScene}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
        />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </>
  );
}
