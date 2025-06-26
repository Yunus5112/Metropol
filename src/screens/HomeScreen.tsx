import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Hoş geldiniz!</Text>
        <Text style={styles.subText}>
          Bu uygulama ile işlemlerinizi kolayca yönetin.
        </Text>
      </View>

      <Card title="Tatil Sepeti" backgroundColor="#FFD700" />
      <Card title="Önerdikçe Kazan" backgroundColor="#FF6347" />
      <Card title="PetroPay" backgroundColor="#90EE90" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
  },
  textContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'left',
  },
  subText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'left',
  },
});

export default HomeScreen;
