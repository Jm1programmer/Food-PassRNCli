

import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import Carts from "../screen/home/recomendados/cart";



import firestore from '@react-native-firebase/firestore';



export default function RecomendadosFlatList() {
  
    const [lista, setLista] = useState([]);
        const getFood = async() => {
           await firestore()
            .collection('foods')
            .limit(4)
            .where('nota', '>=', 1)
            .orderBy(`nota`)
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
        renderItem={({ item }) =>  <Carts  {...item}  />  }
        keyExtractor={({nome}) => nome}
        horizontal={true}
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