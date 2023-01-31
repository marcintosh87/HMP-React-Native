import React, { useState } from 'react';
import { Text, Portal, Modal } from 'react-native-paper';
import { View, StyleSheet, Pressable } from 'react-native';

// Palette for colors: https://coolors.co/palette/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0
const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7209b7',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 16,
  },

  listItem: {
    color: 'white',
    padding: 10,
    borderRadius: 16,
  },
});

const PrayerModal = ({ title, text, source }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <>
      <Pressable style={styles.pageContainer} onPress={showModal}>
        <Text variant="titleLarge" style={styles.listItem}>
          {title}
        </Text>
      </Pressable>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text variant="titleMedium">{title}</Text>
          <Text style={{ paddingTop: 20 }}>{text}</Text>
          <Text style={{ paddingTop: 20 }} variant="labelMedium">
            Source: {source}
          </Text>
        </Modal>
      </Portal>
    </>
  );
};

export default PrayerModal;
