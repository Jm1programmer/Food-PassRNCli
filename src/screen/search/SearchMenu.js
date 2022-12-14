import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, View, TextInput, Dimensions, TouchableOpacity } from "react-native";
import Ficon from 'react-native-vector-icons/Feather'
import FoodFlatlist from "../../components/FoodFlatlist";
import SearchComponent from "./SearchComponent";
export default function SearchMenu() {


 const [text,SetText] = useState('')

   
 

    const Topo = () => {
        return <>
      <SearchComponent />
       </>
    }

 

    return <>
       
        <FoodFlatlist Topo={Topo}/>
         
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