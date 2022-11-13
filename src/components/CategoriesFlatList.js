

import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import CartCategories from "../screen/home/categories/cart";



import firestore from '@react-native-firebase/firestore';



export default function CategoriesFlatList() {
  
    const [lista, setLista] = useState([]);
        const getCategories = async() => {
           await firestore()
            .collection('Categories')
            
            .get()
            .then(querySnapshot => {
             let doc = [];
              querySnapshot.forEach(documentSnapshot => {
                //console.log('Food Id: ', documentSnapshot.id, '=>' ,documentSnapshot.data())
                const categories = {
                    title: documentSnapshot.get('title'),
                    image: documentSnapshot.get('image'),
                    categoriesImage: documentSnapshot.get('categoriesImage'),
                }
                doc.push(categories);
              });
            
              setLista(doc)
            });
    }
   
    useEffect(() => {
    
       getCategories()
    }, []);
return <>
        <FlatList 
        data={lista}
        renderItem={({ item }) =>  <CartCategories  {...item}  />  }
        keyExtractor={({title}) => title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        
         />
    </>
}


