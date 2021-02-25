import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


function SettingsScreen(props) {
    const { navigation } = props
    return (
      <View>
      <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Go to Signup Screen</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebebeb'
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold'
    },
  })
  
  export default SettingsScreen;