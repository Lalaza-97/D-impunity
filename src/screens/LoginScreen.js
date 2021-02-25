import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet , TextInput, Image, state} from 'react-native';


function LoginScreen(props) {
    const { navigation } = props

      
    
    

    return (
      
      <View style={styles.container}>
       
      <View style={styles.NavHeader}>
              <Image source={require('../images/photo.jpg')}
              style={{height:60 ,  flex:1}}/>
      </View>
      <View style={styles.bat}>
          <Text style={styles.header}>Sign-in</Text>
          <TouchableOpacity style={styles.btn}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.bnttext}>Sign-up</Text>
          </TouchableOpacity>    
      </View>
     
      

        <TextInput style= {styles.textInput} placeholder="Your email"
        underlineColorAndroid={'transparent'} />

        <TextInput style= {styles.textInput} placeholder="Your Password"
        secureTextEntry={true}   underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.pheader}>Forgot Password</Text>
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
    NavHeader:{
      height: 240,
      width: 240, 
      backgroundColor: "#000080",
    },
    bat:{
      flexDirection:"row",
      paddingBottom: 10,
      marginBottom:40,
      backgroundColor:"#CDCDCD",
      borderBottomWidth: 1,
  },
    header:{
      fontSize:24,
      color: "#FFF",
      
  },
  btn:{
    marginLeft: 30,
},
  bnttext:{
    fontSize:24,
    color: "white",
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
    backgroundColor:"#000080",
    marginTop:30,
},
btntext:{
    color: "white",
    fontWeight: "bold",
},
pheader:{
  fontSize: 18,
  color: "#CDCDCD",
  paddingTop: 10,
  marginTop: 15, 
},

  })
  
  export default LoginScreen;