import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text>Marcos is Here</Text>
        <Button onPress={() => console.log('I was clicked')}>
          Help Me Pray
        </Button>
      </View>
    </>
  );
}
