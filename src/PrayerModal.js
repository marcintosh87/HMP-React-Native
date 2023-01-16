import React, { useState } from 'react';
import { Text, Portal, Modal } from 'react-native-paper';
import { ScrollView, View, StyleSheet } from 'react-native';

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
  },
});

const PrayerModal = ({ title, text }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <>
      <ScrollView>
        <View style={styles.pageContainer}>
          <Text
            variant="titleLarge"
            style={styles.listItem}
            onPress={showModal}
          >
            {title}
          </Text>
        </View>
      </ScrollView>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>{text}</Text>
        </Modal>
      </Portal>
    </>
  );
};

export default PrayerModal;
