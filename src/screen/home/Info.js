import React from "react";
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from "react-native";
import Ficon from 'react-native-vector-icons/Feather'


function search(s) {
    
}


export default function Info() {
    return <>
   <View style={styles.TextThingView}>
    <Text style={styles.TextThing}>O que você precisa para o </Text> 
    <Text style={[styles.TextThing, styles.TextThingColor]} >Lanche?</Text>
    </View>

    <TouchableOpacity style={styles.Input}>
    <Ficon name="search" size={25} color="#E81C23" />
   
        <TextInput style={styles.InputText}        
        placeholder="Pesquise sua comida favorita..."
        selectionColor={'#909090'} 
        editable={false}
        />
    </TouchableOpacity>
    </>
}


const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    TextThingView: {
        marginTop: 10,
       
    },
    TextThing: {
       
        fontSize: 25,
        alignItems: 'center',
        textAlign: 'center',
        color: '#181818',
        fontFamily: 'Archivo-SemiBold',
        fontWeight: '600',
        
    },

   TextThingColor: {
        color: '#E81C23'
    },

    Input: {
        
        width: '95%',
        flexDirection: 'row',
        height: height / 15,
        backgroundColor: '#fff',
        marginTop: 30,
        marginVertical: 5,
        alignItems: 'center',
       justifyContent: 'space-between',
       
       borderRadius: 15,
        paddingHorizontal: 25,
        alignSelf:'center',
        elevation: 6,
    },

    InputText: {
        
        fontSize: 15,
        color: '#000',
       width: '90%',
       fontFamily: 'Archivo-Regular',
     
    },
})