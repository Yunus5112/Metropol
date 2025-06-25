import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ionicons import edildi

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import BusinessClubScreen from '../screens/BusinessClubScreen';
import MemberOperationsScreen from '../screens/MemberOperationsScreen';

// Root Stack ve Tab Parametre Listeleri
export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
};

export type TabParamList = {
  Home: undefined;
  Payment: undefined;
  BusinessClub: undefined;
  MemberOperations: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Payment') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'BusinessClub') {
            iconName = focused ? 'business' : 'business-outline';
          } else if (route.name === 'MemberOperations') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName || ''} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Anasayfa' }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ title: 'Ödeme Al' }}
      />
      <Tab.Screen
        name="BusinessClub"
        component={BusinessClubScreen}
        options={{ title: 'Business Club' }}
      />
      <Tab.Screen
        name="MemberOperations"
        component={MemberOperationsScreen}
        options={{ title: 'Üye İşlemleri' }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
