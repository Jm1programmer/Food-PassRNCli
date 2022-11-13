import { useRoute } from "@react-navigation/native";
import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, View, TextInput, Dimensions, TouchableOpacity } from "react-native";

import FoodFlatlist from "../../components/CategoriesScreenFlatlist";

export default function Menu({header: Header, }) {

    const route = useRoute()
    const nome = route.params.name


   
 

    const Topo = () => {
        return <>
            <Header />
            
       </>
    }

 

    return <>

        <FoodFlatlist Topo={Topo} Categories={nome}/>
         
    </>
}
    const height = Dimensions.get('screen').height
    const styles = StyleSheet.create({
        title: {
            fontSize: 20,
            color: "#000",
            fontFamily: 'Archivo-SemiBold',
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
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