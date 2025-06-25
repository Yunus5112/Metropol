// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   Dimensions,
//   ScrollView,
//   SafeAreaView,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const { width, height } = Dimensions.get('window');

// // SVG ikonları doğrudan kullanmak için (örnek olarak chippin logosu gibi)
// // Normalde bu tür logoları .png veya .svg dosyası olarak asset'lere eklersiniz
// const ChippinIcon = () => (
//   <View style={styles.chippinLogoContainer}>
//     <Text style={styles.chippinLogoText}>Chippin</Text>
//   </View>
// );

// export default function PaymentScreen() {
//   const [selectedSaleType, setSelectedSaleType] = useState('RESTO %8'); // Seçili satış tipi
//   const [amount, setAmount] = useState('00.00'); // Ödeme miktarı

//   // Hızlı miktar butonları
//   const quickAmounts = ['50.00', '75.00', '100.00', '125.00'];

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container}>
//         {/* Satış İşlemi / Önceki Satışlarım Sekmeleri */}
//         <View style={styles.topTabs}>
//           <TouchableOpacity
//             style={[styles.topTabButton, styles.topTabButtonActive]}
//           >
//             <Text style={styles.topTabButtonTextActive}>Satış İşlemi</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.topTabButton}>
//             <Text style={styles.topTabButtonText}>Önceki Satışlarım</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Satış Tipi Tabları */}
//         <View style={styles.saleTypeTabs}>
//           {['RESTO %8', 'GIFT KDV %8', 'GIFT KDV %18', 'GIFT CARSI %8'].map(
//             type => (
//               <TouchableOpacity
//                 key={type}
//                 style={[
//                   styles.saleTypeTab,
//                   selectedSaleType === type && styles.saleTypeTabActive,
//                 ]}
//                 onPress={() => setSelectedSaleType(type)}
//               >
//                 <Text
//                   style={[
//                     styles.saleTypeTabText,
//                     selectedSaleType === type && styles.saleTypeTabTextActive,
//                   ]}
//                 >
//                   {type}
//                 </Text>
//               </TouchableOpacity>
//             ),
//           )}
//         </View>

//         {/* Hızlı Miktar Butonları */}
//         <View style={styles.quickAmountContainer}>
//           {quickAmounts.map(val => (
//             <TouchableOpacity
//               key={val}
//               style={styles.quickAmountButton}
//               onPress={() => setAmount(val)}
//             >
//               <Text style={styles.quickAmountButtonText}>{val} ₺</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Miktar Görüntüleme ve Giriş Alanı */}
//         <View style={styles.amountDisplayContainer}>
//           <Text style={styles.amountLabel}>{selectedSaleType}</Text>
//           <Text style={styles.amountValue}>{amount} ₺</Text>
//           <View style={styles.amountUnderline} />
//         </View>

//         {/* Ödeme Yöntemleri Kartları */}
//         <View style={styles.paymentMethodsGrid}>
//           <TouchableOpacity style={styles.paymentMethodCard}>
//             <Ionicons name="qr-code-outline" size={40} color="#555" />
//             <Text style={styles.paymentMethodText}>QR/Kod ile Ödeme</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.paymentMethodCard}>
//             <Ionicons name="card-outline" size={40} color="#555" />
//             <Text style={styles.paymentMethodText}>Temassız Ödeme</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.paymentMethodCard}>
//             <Ionicons name="chatbox-ellipses-outline" size={40} color="#555" />
//             <Text style={styles.paymentMethodText}>SMS ile Ödeme</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.paymentMethodCard}>
//             <ChippinIcon /> {/* Özel Chippin Logosu */}
//             <Text style={styles.paymentMethodText}>Chippin ile Ödeme</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#9e2b2b', // Üst bar rengiyle uyumlu
//   },
//   header: {
//     width: '100%',
//     height: 60, // AppBar yüksekliği
//     backgroundColor: '#9e2b2b', // Koyu bordo renk
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//   },
//   headerIconLeft: {
//     padding: 5,
//   },
//   headerIconRight: {
//     padding: 5,
//   },
//   logo: {
//     width: 120,
//     height: 40,
//     resizeMode: 'contain',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5', // Ekranın geri kalanı için açık gri
//     marginTop: -10, // Üst barın altına biraz taşır
//     paddingTop: 10,
//   },
//   topTabs: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#e0e0e0', // Açık gri arka plan
//     borderRadius: 10,
//     marginHorizontal: 15,
//     marginVertical: 10,
//     padding: 5,
//   },
//   topTabButton: {
//     flex: 1,
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   topTabButtonActive: {
//     backgroundColor: '#fff', // Aktif tab beyaz
//   },
//   topTabButtonText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#666',
//   },
//   topTabButtonTextActive: {
//     color: '#9e2b2b', // Aktif tab metni koyu bordo
//     fontWeight: 'bold',
//   },
//   saleTypeTabs: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap', // Butonlar sığmazsa alt satıra geçsin
//     marginHorizontal: 15,
//     marginTop: 15,
//     marginBottom: 20,
//   },
//   saleTypeTab: {
//     flex: 1,
//     backgroundColor: '#eee',
//     paddingVertical: 10,
//     margin: 5,
//     borderRadius: 8,
//     alignItems: 'center',
//     minWidth: (width - 60) / 4, // Her bir buton için yaklaşık genişlik
//   },
//   saleTypeTabActive: {
//     backgroundColor: '#9e2b2b', // Aktif tabın arka planı koyu bordo
//   },
//   saleTypeTabText: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#555',
//     textAlign: 'center',
//   },
//   saleTypeTabTextActive: {
//     color: '#fff', // Aktif tab metni beyaz
//   },
//   quickAmountContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginHorizontal: 15,
//     marginBottom: 20,
//   },
//   quickAmountButton: {
//     backgroundColor: '#fff',
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   quickAmountButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   amountDisplayContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//     paddingHorizontal: 20,
//   },
//   amountLabel: {
//     fontSize: 18,
//     color: '#666',
//     marginBottom: 5,
//   },
//   amountValue: {
//     fontSize: 50, // Büyük font boyutu
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   amountUnderline: {
//     height: 2,
//     width: '60%', // Alt çizginin genişliği
//     backgroundColor: '#9e2b2b', // Koyu bordo çizgi
//     marginTop: 5,
//   },
//   paymentMethodsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   paymentMethodCard: {
//     backgroundColor: '#fff',
//     width: (width - 60) / 2, // Ekran genişliğine göre kart boyutu (padding ve margin dahil)
//     height: 140,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//   },
//   paymentMethodText: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#333',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   // Chippin logosu için geçici stil (gerçek logo görseli olmadığından)
//   chippinLogoContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#007bff', // Mavi ton (örnek)
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   chippinLogoText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
// });
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const ChippinIcon = () => (
  <View style={styles.chippinLogoContainer}>
    <Text style={styles.chippinLogoText}>Chippin</Text>
  </View>
);

export default function PaymentScreen() {
  const [selectedSaleType, setSelectedSaleType] = useState('RESTO %8');
  const [amount, setAmount] = useState('0.00');

  const amountInputRef = useRef<TextInput>(null);

  const quickAmounts = ['50.00', '75.00', '100.00', '125.00'];

  const handleQuickAmountPress = (val: string) => {
    setAmount(val);
    Keyboard.dismiss();
  };

  const focusAmountInput = () => {
    if (amountInputRef.current) {
      amountInputRef.current.focus();
    }
  };

  const handleAmountChange = (text: string) => {
    const formattedText = text.replace(/[^0-9.,]/g, '').replace(',', '.');
    if (formattedText === '') {
      setAmount('0.00');
    } else {
      if (
        formattedText.length > 1 &&
        formattedText.startsWith('0') &&
        !formattedText.startsWith('0.')
      ) {
        setAmount(formattedText.substring(1));
      } else {
        setAmount(formattedText);
      }
    }
  };

  const formatAmountOnBlur = () => {
    let formatted = amount.replace(/,/g, '.');

    if (formatted === '' || formatted === '.') {
      formatted = '0.00';
    } else if (!formatted.includes('.')) {
      formatted += '.00';
    } else {
      if (formatted.endsWith('.')) {
        formatted += '00';
      } else {
        const parts = formatted.split('.');
        if (parts[1] && parts[1].length === 1) {
          formatted += '0';
        } else if (!parts[1]) {
          formatted += '00';
        }
      }
    }
    setAmount(parseFloat(formatted).toFixed(2));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        {/* Satış İşlemi / Önceki Satışlarım Sekmeleri */}
        <View style={styles.topTabs}>
          <TouchableOpacity
            style={[styles.topTabButton, styles.topTabButtonActive]}
          >
            <Text style={styles.topTabButtonTextActive}>Satış İşlemi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topTabButton}>
            <Text style={styles.topTabButtonText}>Önceki Satışlarım</Text>
          </TouchableOpacity>
        </View>

        {/* Satış Tipi Tabları */}
        <View style={styles.saleTypeTabs}>
          {['RESTO KDV %8', 'GIFT KDV %8', 'GIFT KDV %18', 'GIFT CARSI %8'].map(
            type => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.saleTypeTab,
                  selectedSaleType === type && styles.saleTypeTabActive,
                ]}
                onPress={() => setSelectedSaleType(type)}
              >
                <Text
                  style={[
                    styles.saleTypeTabText,
                    selectedSaleType === type && styles.saleTypeTabTextActive,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </View>

        {/* Hızlı Miktar Butonları */}
        <View style={styles.quickAmountContainer}>
          {quickAmounts.map(val => (
            <TouchableOpacity
              key={val}
              style={styles.quickAmountButton}
              onPress={() => handleQuickAmountPress(val)}
            >
              <Text style={styles.quickAmountButtonText}>{val} ₺</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Miktar Görüntüleme ve Giriş Alanı */}
        <TouchableWithoutFeedback onPress={focusAmountInput}>
          {/* Tek bir çocuk View olarak, içindeki elemanları düzenliyoruz */}
          <View style={styles.amountDisplayContainerWrapper}>
            <Text style={styles.amountLabel}>{selectedSaleType}</Text>
            <View style={styles.amountInputRow}>
              {' '}
              {/* Yeni sarmalayıcı View */}
              <TextInput
                ref={amountInputRef}
                style={styles.amountInput}
                value={amount}
                onChangeText={handleAmountChange}
                onBlur={formatAmountOnBlur}
                keyboardType="numeric"
                placeholder="0.00"
                placeholderTextColor="#ccc"
                selectionColor="#9e2b2b"
              />
              <Text style={styles.currencySymbol}>₺</Text>
            </View>
            <View style={styles.amountUnderline} />
          </View>
        </TouchableWithoutFeedback>

        {/* Ödeme Yöntemleri Kartları */}
        <View style={styles.paymentMethodsGrid}>
          <TouchableOpacity style={styles.paymentMethodCard}>
            <Ionicons name="qr-code-outline" size={40} color="#555" />
            <Text style={styles.paymentMethodText}>QR/Kod ile Ödeme</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.paymentMethodCard}>
            <Ionicons name="card-outline" size={40} color="#555" />
            <Text style={styles.paymentMethodText}>Temassız Ödeme</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.paymentMethodCard}>
            <Ionicons name="chatbox-ellipses-outline" size={40} color="#555" />
            <Text style={styles.paymentMethodText}>SMS ile Ödeme</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.paymentMethodCard}>
            <ChippinIcon />
            <Text style={styles.paymentMethodText}>Chippin ile Ödeme</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#9e2b2b',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#9e2b2b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerIconLeft: {
    padding: 5,
  },
  headerIconRight: {
    padding: 5,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: -10,
    paddingTop: 10,
  },
  topTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 5,
  },
  topTabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  topTabButtonActive: {
    backgroundColor: '#fff',
  },
  topTabButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  topTabButtonTextActive: {
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
  saleTypeTab: {
    flex: 1,
    backgroundColor: '#eee',
    paddingVertical: 10,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: (width - 60) / 4,
  },
  saleTypeTabActive: {
    backgroundColor: '#9e2b2b',
  },
  saleTypeTabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
    textAlign: 'center',
  },
  saleTypeTabTextActive: {
    color: '#fff',
  },
  quickAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginBottom: 40,
  },
  quickAmountButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  quickAmountButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  amountDisplayContainerWrapper: {
    // Yeni sarmalayıcı View stili
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    position: 'relative', // amountLabel ve amountUnderline için relative
  },
  amountLabel: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
    position: 'absolute',
    top: -25,
  },
  amountInputRow: {
    // TextInput ve ₺ işaretini içeren satır için yeni stil
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
  paymentMethodCard: {
    backgroundColor: '#fff',
    width: (width - 60) / 2,
    height: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  paymentMethodText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  chippinLogoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chippinLogoText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
