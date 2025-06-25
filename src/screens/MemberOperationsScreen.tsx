import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const menuItemsData = [
  {
    id: 'gunSonu',
    title: 'Gün Sonu İşlemleri',
    subItems: [],
  },
  {
    id: 'satisListesi',
    title: 'Satış Listesi',
    subItems: [],
  },
  {
    id: 'faturaIslemleri',
    title: 'Fatura İşlemleri',
    subItems: [
      { id: 'faturaKesme', title: 'Fatura Kesme' },
      { id: 'faturaBilgileri', title: 'Fatura Bilgileri' },
      { id: 'faturaAdresBilgisi', title: 'Fatura Adres Bilgisi' },
    ],
  },
  {
    id: 'konumDogrulama',
    title: 'Konum Doğrulama',
    subItems: [],
  },
  {
    id: 'kartTalebi',
    title: 'Kart Talebi',
    subItems: [],
  },
  {
    id: 'kullanicilar',
    title: 'Kullanıcılar',
    subItems: [],
  },
  {
    id: 'sikKullanilanFiyatlar',
    title: 'Sık Kullanılan Fiyatlar',
    subItems: [],
  },
];

export default function MemberOperationsScreen() {
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const handleToggle = (itemId: string) => {
    LayoutAnimation.easeInEaseOut();
    setExpandedItemId(expandedItemId === itemId ? null : itemId);
  };

  return (
    <View style={styles.container}>
      {menuItemsData.map(item => (
        <View key={item.id} style={styles.menuItemContainer}>
          <TouchableOpacity
            style={styles.mainTitleRow}
            onPress={() => handleToggle(item.id)}
          >
            <Text style={styles.mainTitleText}>{item.title}</Text>
            <Ionicons
              name={
                expandedItemId === item.id ? 'chevron-down' : 'chevron-forward'
              }
              size={20}
              color="#555"
            />
          </TouchableOpacity>

          {expandedItemId === item.id && item.subItems.length > 0 && (
            <View style={styles.subItemsContainer}>
              {item.subItems.map(subItem => (
                <TouchableOpacity key={subItem.id} style={styles.subItemRow}>
                  <Text style={styles.subItemText}>{subItem.title}</Text>
                  <Ionicons name="chevron-forward" size={18} color="#777" />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItemContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
  },
  mainTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  mainTitleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  subItemsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  subItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  subItemText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
});
