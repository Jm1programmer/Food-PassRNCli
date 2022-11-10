import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import Logo from '../../../assets/Logo.png';

export default function Header() {
    return <>
    <View style={styles.header}>
      
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Falta pouco para matar a sua fome!</Text>
    </View>
    </>
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: '40%'
    },

    title: {
        fontSize: 34,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Archivo-Bold',
    },
    subTitle: {
        fontSize: 15,
        color: '#808080',
        textAlign: 'center',
        fontFamily: 'Archivo-Regular',
    },
})