import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';


function ForgotPassword (props) {
    const { navigation } = props
    return (
      /*
      <View>
      <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Go to Signup Screen</Text>
        </TouchableOpacity>
      </View>
      </View>*/

      <View style={styles.container}>
             <TextInput style= {styles.textInput} placeholder="Your name"
             underlineColorAndroid={'transparent'} />

            <TextInput style= {styles.textInput} placeholder="Your email"
            underlineColorAndroid={'transparent'} />

            <TextInput style= {styles.textInput} placeholder="Your Password"
            secureTextEntry={true}   underlineColorAndroid={'transparent'} />

            <TextInput style= {styles.textInput} placeholder="Your Confirm Password"
            secureTextEntry={true}   underlineColorAndroid={'transparent'} />

            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btntext}>Reset</Text>
            </TouchableOpacity>
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
    textInput: {
     
      height:40,
      marginBottom: 30,
      color: "blue",
      borderBottomColor: "blue",
      borderBottomWidth:1,
  },
    button:{
      
      alignItems: "center",
      padding: 20,
      backgroundColor:"white",
      borderRadius: 25,
      borderTopWidth: 3,
      borderRightWidth: 3,
      borderLeftWidth: 3,
      borderBottomWidth:3,
      borderColor: "yellow",
      marginTop: 30,
  },
  btntext:{
      color: "yellow",
      fontWeight: "bold",
  }
  })
  
  export default ForgotPassword;