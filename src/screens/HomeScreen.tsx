import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>
        Hoş geldiniz! Bu uygulama ile işlemlerinizi kolayca yönetin.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },

  descriptionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});
