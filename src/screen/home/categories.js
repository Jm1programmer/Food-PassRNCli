import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Ficon from 'react-native-vector-icons/Feather'

import hamburguer from '../../../assets/Food/Hamburguer.png'
import coxinha from '../../../assets/Food/coxinha.png'
import orangeJuice from '../../../assets/Food/orangeJuice.png'

export default function Categories() {

    return <>
    <View style={styles.categories}>
        <Text style={styles.title}>Categorias</Text>

        <View style={styles.carts}>
            <TouchableOpacity style={styles.cart}>
                <Image style={styles.cartImage} source={hamburguer} />
                <Text style={styles.cartText}>Hamburgueres</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cart}>
                <Image style={styles.cartImage} source={coxinha} />
                <Text style={styles.cartText}>Salgados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cart}>
                <Image style={styles.cartImage} source={orangeJuice} />
                <Text style={styles.cartText}>Bebidas</Text>
            </TouchableOpacity>
           
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    categories: {
        marginLeft: 10,
        marginTop: 30,
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        color: "#000",
        fontFamily: 'Archivo-SemiBold',
       
    },

    carts: {
        flexDirection: 'row',
        marginTop: 20,
        
    },

    cart: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 1,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',

      
    
        

        
    },

    cartImage: {
        width: 50,
        height: 60,
    },

    cartText: {
        fontSize: 12,
        color: "#000",
        fontFamily: 'Archivo-Regular',
    },
})