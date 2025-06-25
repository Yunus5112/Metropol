import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemberOperationsScreen() {
  return (
    <View style={styles.container}>
      <Text>üye işlemleri</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});