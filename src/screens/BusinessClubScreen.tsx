import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BusinessClubScreen() {
  const handleApply = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
        <Text style={styles.buttonText}>Kart Talebi Oluştur</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
