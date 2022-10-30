import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";

import Micon from 'react-native-vector-icons/MaterialIcons'
import Ficon from 'react-native-vector-icons/Feather'



export default function Categories() {

    return <>
    <View style={styles.categories}>
     

        <View style={styles.carts}>
            <TouchableOpacity style={styles.cart} onPress={() => {
                Alert.alert('Hack de Dinheiro Infinito "100%" Ativado ')
            }}>
            <Micon name="payment" size={40} color="#000" />
                <Text style={styles.cartText}>Pagamentos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cart}>
            <Ficon name="settings" size={39} color="#000" />
                <Text style={styles.cartText}>Configurar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cart}>
            <Ficon name="bell" size={39} color="#000" />
                <Text style={styles.cartText}>Notificação</Text>
            </TouchableOpacity>
           
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
 
    

    carts: {
        flexDirection: 'row',
        marginTop: 30,
        
    },

    cart: {
        width: 80,
        height: 80,
        backgroundColor: '#F1EFF1',
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
        fontSize: 10,
        color: "#000",
        fontFamily: 'Archivo-Bold',
    },
})