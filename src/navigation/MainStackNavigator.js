import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  LoginScreen  from '../screens/LoginScreen';
import  HomeScreen  from '../screens/HomeScreen';
import  DetailsScreen  from '../screens/DetailsScreen';
import  SignupScreen  from '../screens/SignupScreen';
import  SettingsScreen  from '../screens/SettingsScreen';
import  ForgotPassword  from '../screens/ForgotPassword';


const Stack = createStackNavigator();

function MainStackNavigator(props) {
    const { navigation } = props
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerStyle: {
            backgroundColor: '#FFEF00'},
            }}
           />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Screen',
          headerStyle: {
            backgroundColor: '#000080'},
            }}
       />
        
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}  />

        <Stack.Screen 
          name="Signup" 
          component={SignupScreen}  />

        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}  />

        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword}  /> 
        
        
      </Stack.Navigator>
    </NavigationContainer>
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

export default MainStackNavigator;