import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    backgroundColor: '#000',
    color: '#fff',
    width: '70%',
    height: 40,
    borderRadius: 16,
    padding: 10,
    marginBottom: 10,
  },
  verseText: {
    padding: 10,
  },
});

const baseUrl = 'https://bible-api.com/';

const formatVerse = (verse) => {
  if (verse) {
    const verseWithBook =
      verse.verses[0].book_name +
      ' ' +
      verse.verses[0].chapter +
      ':' +
      verse.verses[0].verse +
      ' ' +
      verse.verses[0].text;

    return verseWithBook;
  }
};

export default function FindVerse() {
  const [text, setText] = useState('');
  const [verse, setVerse] = useState('');
  const [searchError, setSearchError] = useState(false);

  const getVerse = async (inputText) => {
    try {
      const response = await axios.get(`${baseUrl}${inputText}`);
      const { data } = response;
      setSearchError(false);
      setVerse(data);
      setText('');
      console.log(verse);
    } catch (error) {
      setSearchError(true);
      setText('');
      console.error(error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Text variant="titleMedium">Find A Verse</Text>

        <TextInput
          label="Find A Verse"
          mode="flat"
          value={text}
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
        />
        <Button mode="contained" onPress={() => getVerse(text)}>
          Search
        </Button>
        <Text variant="titleMedium">
          {searchError ? 'No Verse Was Found' : ''}
        </Text>
        <Text variant="bodyMedium" style={styles.verseText}>
          {verse ? formatVerse(verse) : ''}
        </Text>
      </View>
    </>
  );
}
