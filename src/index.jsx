import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// screens

import Home from './screens/home';
import Register from './screens/Register';
import Login from './screens/Login';
import Loading from './screens/Loading';
import Header from './components/header';

import ImagePickerExample from './components/ImageUpload';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Loading'
          component={Loading}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Logar-se'
          component={TabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Registrar-se'
          component={Register}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='header'
          component={Header}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='home'
          component={TabsNavigationLoggedIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Enviar Imagem'
          component={ImagePickerExample}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName='Logar-se'
      activeColor='rgb(33, 150, 243)'
      inactiveColor='white'
      barStyle={{ backgroundColor: 'rgba(33, 150, 243, .3)' }}
      >
      <Tabs.Screen
        name='Logar-se'
        component={Login}
        options={{
          tabBarLabel: 'Logar-se',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='account'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Registrar-se'
        component={Register}
        options={{
          tabBarLabel: 'Registrar-se',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='plus-box'
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
function TabsNavigationLoggedIn() {
  return (
    <Tabs.Navigator
      initialRouteName='Feed'
      activeColor='rgb(33, 150, 243)'
      inactiveColor='white'
      barStyle={{ backgroundColor: 'rgba(33, 150, 243, .3)' }}
    >
      <Tabs.Screen
        name='Feed'
        component={Home}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='home'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Enviar Imagem'
        component={ImagePickerExample}
        options={{
          tabBarLabel: 'Enviar Imagem',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='publish'
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
