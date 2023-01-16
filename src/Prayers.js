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

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pageTitleContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    color: 'red',
    border: '1px solid black',
  },
});

const prayers = [
  {
    id: 1,
    title: "The Lord's Prayer",
    text: 'Our Father who art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven. Give us this day our daily bread. And forgive us our debts, as we forgive our debtors. And lead us not into temptation, but deliver us from evil. For thine is the kingdom, and the power, and the glory, for ever. Amen. Matthew 6:9-13',
  },
  {
    id: 2,
    title: 'Breathe In Me',
    text: `Breathe in me, O Holy Spirit,
    that my thoughts may all be holy.
    Act in me, O Holy Spirit,
    that my work too may be holy
    Draw my heart, O Holy Spirit,
    that I love but what is holy
    Strengthen me, O Holy Spirit,
    to defend all that is holy
    Guide me then, O Holy Spirit,
    that I always may be holy.
    Amen
    Mother Teresa `,
  },
];

const Prayers = () => {
  return (
    <>
      <Provider>
        <View style={styles.pageTitleContainer}>
          <Text variant="titleMedium">Prayers</Text>
        </View>
        {prayers &&
          prayers.map(({ id, title, text }) => (
            <PrayerModal title={title} key={id} text={text} />
          ))}
      </Provider>
    </>
  );
};

export default Prayers;
