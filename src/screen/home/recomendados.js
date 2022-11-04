
import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, Alert, Button } from "react-native";
import RedGradient from "../../../assets/BackgroundGradients/RedGradient.png"
import { CarregaRecomendados } from "../../services/RecomendadosDados";
import { useNavigation } from '@react-navigation/native';

import RecomendadosFlatList from "../../components/RecomendadosFlatlist";

import BuyScreen from "../BuyScreen";

export default function Recomendados( ) {
const [lista, setLista] = useState([]);


 
  

    return <>
    <View style={styles.Recomendados}>
        <Text style={styles.title}>Recomendados</Text>

        <RecomendadosFlatList />
       
    </View>
    </>
}

 

 




const styles = StyleSheet.create({
    FlatList: {
        width: "100%"
    },
    Recomendados: {
        marginLeft: 10,
       
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        color: "#000",
        fontFamily: 'Archivo-SemiBold',
        marginBottom: 10,
       
    },

    background: {
        position: 'absolute',
        width: 180,
        height: 210,
        borderRadius: 20,
    },
    	carts: {
            flexDirection: 'row'
        },  
    cart: {
        width: 180,
        height: 210,
    
      
        borderRadius: 20,
        backgroundColor: '#fff',
      
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 3,
        
    },  

    Money: {
        fontSize: 20,
        
        color: '#fff',
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontFamily: 'Archivo-SemiBold',
    },

    foodName: {
        fontSize: 18,
        lineHeight: 22,
        marginTop: 10,
        fontFamily: 'Archivo-SemiBold',
        color: '#fff',
        
      alignSelf: 'flex-start',
        marginLeft: 20,
    },

    food: {
        width: 120,
        height: 120,
    },



   
})