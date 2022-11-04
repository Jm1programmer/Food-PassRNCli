

import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import Menu from "../screen/home/Menu";
import { CarregaMenu } from "../services/CarregaDados";

import Header from "../screen/home/header";
import Info from "../screen/home/Info";
import Categories from "../screen/home/categories";
import Recomendados from "../screen/home/recomendados";

import firestore from '@react-native-firebase/firestore';



export default function FoodFlatlist({ Topo}) {
  
    const [lista, setLista] = useState([]);
        const getFood = async() => {
            await firestore()
            .collection('foods')
            .orderBy('price')
            .get()
            .then(querySnapshot => {
             let doc = [];
              querySnapshot.forEach(documentSnapshot => {
                //console.log('Food Id: ', documentSnapshot.id, '=>' ,documentSnapshot.data())
                const food = {
                    nome: documentSnapshot.get('name'),
                    desc: documentSnapshot.get('desc'),
                    nota: documentSnapshot.get('nota'),
                    preco: documentSnapshot.get('price'),
                    Tempo: documentSnapshot.get('time'),
                    imagem: documentSnapshot.get('image'),

                }
                doc.push(food);
              });
            
              setLista(doc)
            });
    }
   
    useEffect(() => {
    
       getFood()
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
