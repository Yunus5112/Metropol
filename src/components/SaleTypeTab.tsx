import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SaleTypeTabProps {
  type: string;
  selected: boolean;
  onPress: () => void;
}

const SaleTypeTab: React.FC<SaleTypeTabProps> = ({
  type,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tab, selected && styles.tabActive]}
      onPress={onPress}
    >
      <Text style={[styles.text, selected && styles.textActive]}>{type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    backgroundColor: '#eee',
    paddingVertical: 10,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 70,
  },
  tabActive: {
    backgroundColor: '#9e2b2b',
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
    textAlign: 'center',
  },
  textActive: {
    color: '#fff',
  },
});

export default SaleTypeTab;
