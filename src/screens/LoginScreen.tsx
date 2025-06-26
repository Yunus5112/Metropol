import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    navigation.replace('MainTabs');
  };

  return (
    <KeyboardAvoidingView
      style={styles.fullScreenContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.topCurvedBackground} />
        <View style={styles.topRightCircle} />
        <Text style={styles.loginText}>Metropol CepPOS</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Telefon Numaranız"
              placeholderTextColor="#999999"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <Ionicons
              name="person-outline"
              size={20}
              color="#888"
              style={styles.inputIcon}
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Şifreniz"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#888888"
              style={styles.inputIcon}
            />
          </View>

          <TouchableOpacity
            style={styles.rememberMeContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <Ionicons
              name={rememberMe ? 'checkmark-circle' : 'ellipse-outline'}
              size={22}
              color={rememberMe ? '#FF0000' : '#ccc'}
              style={styles.checkboxIcon}
            />
            <Text style={styles.rememberMeText}>Giriş bilgilerimi kaydet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>GİRİŞ YAP</Text>
          </TouchableOpacity>

          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => console.log('Şifremi Unuttum')}>
              <Text style={styles.linkText}>Şifremi Unuttum</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Üye Kayıt')}>
              <Text style={styles.linkText}>Üye Kayıt</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.socialMediaHeader}>
            Sosyal Medyada MetropolCard
          </Text>
          <View style={styles.socialIconsContainer}>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="facebook" size={30} color="#4267B2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="twitter" size={30} color="#1DA1F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="instagram" size={30} color="#E1306C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="linkedin" size={30} color="#0077B5" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.versionText}>v2.2.0</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
    position: 'relative',
  },
  topCurvedBackground: {
    position: 'absolute',
    top: -width * 0.4,
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: (width * 1.5) / 2,
    backgroundColor: '#9e2b2b',
    left: -width * 0.25,
    overflow: 'hidden',
  },
  topRightCircle: {
    position: 'absolute',
    top: 0,
    right: -width * 0.2,
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: (width * 0.5) / 2,
    backgroundColor: '#FFCCCC',
    opacity: 0.8,
  },
  loginText: {
    color: 'blue',
    marginTop: 150,
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    marginTop: 75,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
  },
  inputIcon: {
    padding: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 25,
    alignItems: 'center',
  },
  checkboxIcon: {
    marginRight: 10,
  },
  rememberMeText: {
    fontSize: 15,
    color: '#555555',
  },
  loginButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  linkText: {
    color: '#9e2b2b',
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  socialMediaHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    fontWeight: '500',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    padding: 10,
    marginHorizontal: 10,
  },
  versionText: {
    fontSize: 14,
    color: '#999999',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
