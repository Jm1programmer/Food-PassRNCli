import React from "react";
import { Image, Text, View, StyleSheet, Dimensions } from "react-native";

import Eicon from 'react-native-vector-icons/Entypo'

export default function Profileheader() {
    return <>
    <View style={styles.Header} >
        <View style={styles.Background}></View>
        <View style={styles.perfil}>
            <View style={styles.profileImgOutline}>
            <View style={styles.Profile}>
            <Eicon name='camera' size={40} color={"#000"} />
                </View> 
            </View>
      
        </View>
        
        
    
    </View>
    </>
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    Header: {
        width: windowWidth,
        height: windowHeight / 3,

     
    },
    Background: {
        width: windowWidth,
        height: windowHeight / 3.5,
        backgroundColor: '#808080',
        position: 'absolute'
    
    },
    perfil: {
        width: windowWidth,
        height: windowHeight / 3,
        justifyContent: 'flex-end',
        position: 'absolute',
      
    },
    profileImgOutline: {
        borderColor: "#F1EFF1",
        borderWidth: 70,
        width: 120,
        height: 120,
        alignSelf: 'center',
        borderRadius: 90,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
   
    Profile: {
        width: 120,
        height: 120,
      
        borderRadius: 90,
        backgroundColor: '#CDCDCD',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    nome: {
        fontSize: 20,
        marginTop: 10,
        color: '#fff',
     
        alignSelf: 'center',
        fontFamily: 'Archivo-Bold',
    },

})