import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Logo from '../../../assets/Logo.png';
import Ficon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";
import Profileheader from "./ProfileSign";
export default function Header() {
    const navigation = useNavigation()
    return <>



    <View style={styles.header}>
       <Profileheader />
      
        <Text style={styles.title}>Registre a conta</Text>
        <Text style={styles.subTitle}>Varias comidas com apenas um clique!</Text>
    </View>

    <TouchableOpacity style={styles.goback}  onPress={() => {
            navigation.goBack()
        }
         }>
        <Ficon style={styles.IconLeft} name="chevron-left" size={50} color="#f2f7f2" />
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
       
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
    goback: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0,.5)',
        borderRadius: 90,
        position: 'absolute',
        margin: 10,
    },
})