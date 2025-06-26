import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ReactNode } from 'react';

interface PaymentMethodCardProps {
  icon: ReactNode;
  text: string;
  onPress: () => void;
  style?: ViewStyle;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  icon,
  text,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: 140,
    height: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default PaymentMethodCard;
