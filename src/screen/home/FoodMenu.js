import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import Menu from "./Menu";
import { CarregaMenu } from "../../services/CarregaDados";


export default function FoodMenu({header: Header, info: Info, categories: Categories}) {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);
 
    useEffect(() => {
        const retorno = CarregaMenu();
       
        
       setLista(retorno.lista);
    }, []);

    const Topo = () => {
        return <>
        <Header />
        <Info />
        <Categories />
        <Text style={styles.title}>Popular</Text>
       </>
    }

 

    return <>
        <FlatList style={styles.FlatList}
        data={lista}
        renderItem={({ item }) =>  <Menu  {...item}  />  }
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={Topo}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        
         />
    </>
}

    const styles = StyleSheet.create({
        title: {
            fontSize: 20,
            color: "#000",
            fontFamily: 'Archivo-SemiBold',
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
        },

      
    })