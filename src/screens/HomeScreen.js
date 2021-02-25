import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'


function HomeScreen (props) { 
    const { navigation } = props 
    return (
        /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Details')}>
                <Text style={styles.buttonText}>Go to Detail Screen</Text>
            </TouchableOpacity>
        </View>*/

        <ImageBackground style={styles.container}
    source={require("../images/bdg.jpg")}>
      
       <LinearGradient
                colors={["rgba(0,164,109,0,4)" ,"transparent"]}
                style={{
                    left:0,
                    right:0,
                    height:90,
                    margin:-45
                }}>
                    <View style={{
                        backgroundColor:"#fff",
                        paddingVertical:8,
                        paddingHorizontal:20,
                        marginHorizontal:35,
                        borderRadius:15,
                        marginTop:35,
                        flexDirection:"row",
                        alignItems:"center"
                    }}>
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor="#b1e5d3"
                            style={{
                                fontWeight:"bold",
                                fontSize:28,
                                width:260
                            }}
                        />
                        <Image source={require('../images/search-512.png')}
                        style={{height:20 , width:20}}/>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        paddingHorizontal:20,
                        width:"100%",
                        alignItems: "center",
                    }}>
                        <View style={{width:"50%"}}>
                            <Text>Home</Text>
                        </View>
                    </View>
            </LinearGradient>
      
      <Text style={styles.text}>Welcome to Impunity app</Text>
      
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Go to Detail Screen</Text>
      </TouchableOpacity>
    
    </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 70,
      },
      buttonContainer: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        width: 230
      },
      buttonText: {
        fontSize: 20,
        color: '#fff'
      },


    })

    export default HomeScreen