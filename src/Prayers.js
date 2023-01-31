import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {
  Button,
  Text,
  List,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';

import PrayerModal from './PrayerModal';
import { prayers } from './listOfPrayers';

const styles = StyleSheet.create({
  pageTitleContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Prayers = () => {
  return (
    <>
      <Provider>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View style={styles.pageTitleContainer}>
            <Text variant="titleMedium">Prayers</Text>
          </View>
          <ScrollView style={{ padding: 10 }}>
            {prayers &&
              prayers.map(({ id, title, text, source }) => (
                <PrayerModal
                  title={title}
                  key={id}
                  text={text}
                  source={source}
                />
              ))}
          </ScrollView>
        </View>
      </Provider>
    </>
  );
};

export default Prayers;
