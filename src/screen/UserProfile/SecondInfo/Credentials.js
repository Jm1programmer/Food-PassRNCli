import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Micon from 'react-native-vector-icons/MaterialIcons'
import Ficon from 'react-native-vector-icons/Feather'



export default function Credentials() {

    return <>
    <View style={styles.Credentials}>
        <View style={styles.TextCredentials}>
     <Text style={styles.Text}>Senha:</Text>
     <Text style={styles.Text}>............ </Text>
     </View>

     <View style={styles.line}/>

     <View style={styles.TextCredentials}>
     <Text style={styles.Text}>Escola:</Text>
     <Text style={styles.Text}>Nome da Escola</Text>
     </View>


     <View style={styles.line}/>

     <View style={styles.TextCredentials}>
     <Text style={styles.Text}>Turma: </Text>
     <Text style={styles.Text}>9A</Text>
     </View>

     <View style={styles.line}/>
     

     
    </View>
    </>
}

const styles = StyleSheet.create({
 
    Credentials: {
        marginTop: 25,
        marginLeft: 15,
    },

    TextCredentials: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },


    Text: {
       
    marginTop: 10,
        fontSize: 20,
        color: "#000",
        fontFamily: 'Archivo-Regular',
    },

    line: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderWidth: .5,
        width: '95%'
    }
})