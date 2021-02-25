import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';


import MainStackNavigator from './src/navigation/MainStackNavigator'


export default function App() {
  return (
  <MainStackNavigator/>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
