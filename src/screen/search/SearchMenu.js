import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, View, TextInput, Dimensions } from "react-native";
import SearchedFood from "./SearchedFood";

import { CarregaMenu } from "../../services/CarregaDados";
import Ficon from 'react-native-vector-icons/Feather'

export default function SearchMenu() {
    const [searchText, setSearchText] = useState('')
    const [lista, setLista] = useState([]);
 
    
    useEffect(() => {
        const retorno = CarregaMenu();
       
       setLista(retorno.lista);
    }, );


    

   const Input = () => {
    return <>
    <View style={styles.Input}>
    <Ficon name="search" size={25} color="#E81C23" />
   
        <TextInput style={styles.InputText}    
      
        placeholder="Pesquise sua comida favorita..."
        selectionColor={'#909090'} 
        onChangeText={setSearchText}
        value={searchText}
      
   
        
        />
    </View>
    </>
   }
 

    const Topo = () => {
        return <>
        <Input />
        <View style={styles.InfoView}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.FoodFound}>XX Comidas Encontradas</Text>
        </View>
       </>
    }

 

    return <>
        <FlatList style={styles.FlatList}
        data={lista}
        renderItem={({ item }) =>  <SearchedFood  {...item}  />  }
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={Topo}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        
         />
    </>
}
    const height = Dimensions.get('screen').height
    const styles = StyleSheet.create({

        InfoView: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          
            marginTop: 10,
            marginBottom: 10,
        },
        title: {
            fontSize: 20,
            color: "#000",
            fontFamily: 'Archivo-SemiBold',
           
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

        FoodFound: {
            fontSize: 14,
            color: '#808080',
          
           fontFamily: 'Archivo-Regular',
        },

      
    })