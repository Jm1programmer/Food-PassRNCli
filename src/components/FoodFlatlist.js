

import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import Menu from "../screen/home/Menu";
import { CarregaMenu } from "../services/CarregaDados";

import Header from "../screen/home/header";
import Info from "../screen/home/Info";
import Categories from "../screen/home/categories";
import Recomendados from "../screen/home/recomendados";




export default function FoodFlatlist({ Topo}) {

    const [lista, setLista] = useState([]);
 
    useEffect(() => {
        const retorno = CarregaMenu();
       
        
       setLista(retorno.lista);
    }, []);
return <>
        <FlatList 
        data={lista}
        renderItem={({ item }) =>  <Menu  {...item}  />  }
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={Topo}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        
         />
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