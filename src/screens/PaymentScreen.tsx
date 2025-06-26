import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PaymentMethodCard from '../components/PaymentMethodCard';
import QuickAmountButton from '../components/QuickAmountButton';
import SaleTypeTab from '../components/SaleTypeTab';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

const PaymentScreen: React.FC = () => {
  const [selectedSaleType, setSelectedSaleType] = useState('RESTO KDV %8');
  const [amount, setAmount] = useState('0.00');
  const amountInputRef = useRef<TextInput>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const handlePaymentMethodPress = (method: string) => {
    setSelectedPaymentMethod(method);
    setModalVisible(true);
  };

  const saleTypes = [
    'RESTO KDV %8',
    'GIFT KDV %8',
    'GIFT KDV %18',
    'GIFT CARSI %8',
  ];
  const quickAmounts = ['50.00', '75.00', '100.00', '125.00'];

  const handleAmountChange = (text: string) => {
    const formatted = text.replace(/[^0-9.,]/g, '').replace(',', '.');
    setAmount(formatted || '0.00');
  };

  const formatAmountOnBlur = () => {
    let val = amount.replace(/,/g, '.');
    if (val === '' || val === '.') val = '0.00';
    else if (!val.includes('.')) val += '.00';
    else {
      const parts = val.split('.');
      if (parts[1]?.length === 1) val += '0';
      else if (!parts[1]) val += '00';
    }
    setAmount(parseFloat(val).toFixed(2));
  };
  const [activeTab, setActiveTab] = useState<'sales' | 'previous'>('sales');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        {/* Üst Tab Menüsü */}
        <View style={styles.topTabs}>
          <TouchableWithoutFeedback onPress={() => setActiveTab('sales')}>
            <View
              style={[
                styles.topTabItem,
                activeTab === 'sales' && styles.activeTopTab,
              ]}
            >
              <Text
                style={[
                  styles.topTabText,
                  activeTab === 'sales' && styles.activeTopTabText,
                ]}
              >
                Satış İşlemi
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => setActiveTab('previous')}>
            <View
              style={[
                styles.topTabItem,
                activeTab === 'previous' && styles.activeTopTab,
              ]}
            >
              <Text
                style={[
                  styles.topTabText,
                  activeTab === 'previous' && styles.activeTopTabText,
                ]}
              >
                Önceki Satışlarım
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Satış Tipi Tabs */}
        <View style={styles.saleTypeTabs}>
          {saleTypes.map(type => (
            <SaleTypeTab
              key={type}
              type={type}
              selected={selectedSaleType === type}
              onPress={() => setSelectedSaleType(type)}
            />
          ))}
        </View>

        {/* Hızlı Miktar Butonları */}
        <View style={styles.quickAmountContainer}>
          {quickAmounts.map(val => (
            <QuickAmountButton
              key={val}
              amount={val}
              onPress={() => {
                setAmount(val);
                Keyboard.dismiss();
              }}
            />
          ))}
        </View>

        {/* Miktar Girişi */}
        <TouchableWithoutFeedback
          onPress={() => amountInputRef.current?.focus()}
        >
          <View style={styles.amountContainer}>
            <Text style={styles.amountLabel}>{selectedSaleType}</Text>
            <View style={styles.amountInputRow}>
              <TextInput
                ref={amountInputRef}
                style={styles.amountInput}
                value={amount}
                onChangeText={handleAmountChange}
                onBlur={formatAmountOnBlur}
                keyboardType="numeric"
                placeholder="0.00"
                selectionColor="#9e2b2b"
              />
              <Text style={styles.currencySymbol}>₺</Text>
            </View>
            <View style={styles.amountUnderline} />
          </View>
        </TouchableWithoutFeedback>

        {/* Payment Method Cards */}
        <View style={styles.paymentMethodsGrid}>
          <PaymentMethodCard
            icon={<Ionicons name="qr-code-outline" size={40} color="#555" />}
            text="QR/Kod ile Ödeme"
            onPress={() => handlePaymentMethodPress('QR/Kod ile Ödeme')}
          />
          <PaymentMethodCard
            icon={<Ionicons name="card-outline" size={40} color="#555" />}
            text="Temassız Ödeme"
            onPress={() => handlePaymentMethodPress('Temassız Ödeme')}
          />
          <PaymentMethodCard
            icon={
              <Ionicons
                name="chatbox-ellipses-outline"
                size={40}
                color="#555"
              />
            }
            text="SMS ile Ödeme"
            onPress={() => handlePaymentMethodPress('SMS ile Ödeme')}
          />
          <PaymentMethodCard
            icon={
              <View style={styles.chippinLogo}>
                <Text style={styles.chippinText}>Chippin</Text>
              </View>
            }
            text="Chippin ile Ödeme"
            onPress={() => handlePaymentMethodPress('Chippin ile Ödeme')}
          />
        </View>
      </ScrollView>

      {/* Bottom Modal */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            {selectedPaymentMethod} ile ödeme yapabilirsiniz.
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... diğer stillerin aynısı ...
  safeArea: {
    flex: 1,
    backgroundColor: '#9e2b2b',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
  },
  topTabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    marginTop: 10,
  },

  topTabItem: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },

  activeTopTab: {
    borderBottomColor: '#9e2b2b',
  },

  topTabText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },

  activeTopTabText: {
    color: '#9e2b2b',
    fontWeight: 'bold',
  },
  saleTypeTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 8,
    marginTop: 15,
    marginBottom: 20,
  },
  quickAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginBottom: 40,
  },
  amountContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    position: 'relative',
  },
  amountLabel: {
    fontSize: 18,
    color: '#666',
    position: 'absolute',
    top: -25,
  },
  amountInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountInput: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 150,
    textAlign: 'center',
    padding: 0,
  },
  currencySymbol: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
  amountUnderline: {
    height: 2,
    width: '60%',
    backgroundColor: '#9e2b2b',
    marginTop: 5,
    position: 'absolute',
    bottom: -10,
  },
  paymentMethodsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  chippinLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chippinText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    height: height * 0.75,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
});

export default PaymentScreen;
