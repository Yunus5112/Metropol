import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface QuickAmountButtonProps {
  amount: string;
  onPress: () => void;
}

const QuickAmountButton: React.FC<QuickAmountButtonProps> = ({
  amount,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{amount} ₺</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default QuickAmountButton;
