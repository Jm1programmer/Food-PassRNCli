import { useNavigation } from "@react-navigation/native";
import React, {useState,useEffect} from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";



export default function CartCategories({ title, image, categoriesImage}) {
    const [imageUrl, setImageUrl] = useState(undefined);
    const navigation = useNavigation()
    useEffect(() => {
        setImageUrl(image)
      }, []);
    return <>
  
            <TouchableOpacity style={styles.cart} onPress={() => {
     navigation.navigate('Categories',{imagem: categoriesImage, name: title,})
 } }> 
                <Image style={styles.cartImage} source={{uri: imageUrl}} resizeMode={'cover'}  />
                <Text style={styles.cartText}>{title}</Text>
            </TouchableOpacity>

           
       
 
    </>
}

const styles = StyleSheet.create({
  

  

    cart: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 1,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',

      
    
        

        
    },

    cartImage: {
        width: 50,
        height: 50,
    },

    cartText: {
        fontSize: 12,
        color: "#000",
        fontFamily: 'Archivo-Regular',
    },
})