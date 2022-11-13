import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Header() {
    const route = useRoute()
    const [imageUrl, setImageUrl] = useState(undefined);

    useEffect( () => {

        setImageUrl(route.params.imagem)
         
        }, []);
    return <>
    <View style={styles.header}>
       
    <Image source={{uri: imageUrl}}  style={styles.FoodImage} resizeMode={'cover'}  />
    </View>
    
    </>
}
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    FoodImage: {
        width: '100%',
        height: windowHeight / 3,
        backgroundColor: '#808080',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
       
       },
})