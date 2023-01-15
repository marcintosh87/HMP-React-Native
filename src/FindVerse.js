import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
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
    width: '80%',
    height: 40,
    borderRadius: 16,
    padding: 10,
    marginBottom: 10,
  },
  chapterAndVerseNumber: {
    backgroundColor: '#000',
    color: '#fff',
    width: '20%',
    height: 40,
    borderRadius: 16,
    padding: 10,
    marginBottom: 10,
  },
  verseText: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  verseTextTitle: {
    padding: 2,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

const baseUrl = 'https://bible-api.com/';

const formatVerse = (verse) => {
  if (verse) {
    const verseText = verse.verses[0].text;

    return verseText;
  }
};
const formatVerseTitle = (verse) => {
  if (verse) {
    const book = `${verse.verses[0].book_name} ${verse.verses[0].chapter}:${verse.verses[0].verse} `;

    return book;
  }
};

export default function FindVerse() {
  const [text, setText] = useState('');
  const [chapter, setChapter] = useState('');
  const [lineNumber, setLineNumber] = useState('');
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

  const disableSearch = Boolean(text.length < 1);
  const disableClear = Boolean(verse.length < 1);

  console.log(disableSearch);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text variant="titleLarge" style={{ paddingBottom: 8 }}>
          Find A Verse
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            label="Find A Verse"
            placeholder="e.g. John 3:16"
            placeholderTextColor={'#555'}
            mode="flat"
            value={text}
            style={styles.textInput}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            disabled={disableClear}
            mode="contained"
            onPress={() => {
              setVerse('');
            }}
          >
            Clear
          </Button>
          <Button
            disabled={disableSearch}
            mode="contained"
            onPress={() => getVerse(text)}
          >
            Search
          </Button>
        </View>
        <Text variant="titleMedium">
          {searchError ? 'No Verse Was Found' : ''}
        </Text>
        <Text variant="titleMedium" style={styles.verseTextTitle}>
          {verse ? formatVerseTitle(verse) : ''}
        </Text>
        <Text variant="bodyMedium" style={styles.verseText}>
          {verse ? formatVerse(verse) : ''}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
