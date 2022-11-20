import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import ScreenMenu from "../../components/ChangeScreenMenu";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
export default function ShoppingCartScreen() {
    const user = auth().currentUser;

    firestore()
    .collection('users')
    .doc(user.uid)
    .collection('favorites')
    .doc('Hamburguer')
    .get()
    .then(documentSnapshot => {
      
      if (documentSnapshot.exists) {
    
        console.log(documentSnapshot.data())
        
       
      }
    });
    return <>

    
    <View style={styles.screen}>
        <View style={styles.Menu}>
        <Text style={styles.MyCartText}>Minha Cesta</Text>
        </View>
        
        <View style={styles.Cesta}>
         <Text style={styles.CestaInfos}>Sua Cesta está vazia...</Text>
        </View>
       
    </View>
    <ScreenMenu />
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
    },

    MyCartText: {
        fontSize: 18,
        marginTop: 30,
        color: '#000',
     
        alignSelf: 'center',
        fontFamily: 'Archivo-Bold',
    },

    CestaInfos: {
        fontSize: 20,
        marginTop: 30,
        color: '#000',
     
        alignSelf: 'center',
        fontFamily: 'Archivo-Bold',
    },
})