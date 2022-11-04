import React, {useState, useEffect} from "react";
import { Image, View, TouchableOpacity, Dimensions,StyleSheet, Text  } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

import Ficon from 'react-native-vector-icons/Feather'
import FAicon from 'react-native-vector-icons/FontAwesome'


export default function Header(  ) {
 
    [favoritado, SetFavoritado] = useState(false)

    const navigation = useNavigation()
    const route = useRoute()

    const [imageUrl, setImageUrl] = useState(undefined);

    useEffect( () => {

      setImageUrl(route.params.imagem)
       
      }, []);

    return <>
    
    <View style={styles.Header}>
        
       <Image source={{uri: imageUrl}} style={styles.FoodImage} resizeMode={'cover'} />
       <View style={styles.TextView}>
       <Text style={styles.text}>Detalhes</Text>
       </View>
       <View style={styles.info}>
        <TouchableOpacity style={styles.goback}  onPress={() => {
            navigation.goBack()
        }
         }>
        <Ficon style={styles.IconLeft} name="chevron-left" size={50} color="#f2f7f2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
                SetFavoritado(!favoritado)
        }}>
       <FAicon name="heart" size={30} color={favoritado ? "#E81C23" : "#f2f7f2"} />
       </TouchableOpacity>
       </View>
    </View>
   
    
    </>
}
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
   Header: {
    
    width: '100%',
    height: windowHeight / 2.2,
    backgroundColor: '#808080',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
   justifyContent: 'flex-end'
   },

   FoodImage: {
    width: '100%',
    height: windowHeight / 2.2,
    backgroundColor: '#808080',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute'
   },
   TextView: {
    position: 'absolute',
    alignSelf: 'center',
  
    height: windowHeight / 2.3,
   },
   text: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Archivo-Regular',
    color: '#fff',
    
    
   },

   info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
   },

   IconLeft: {
    elevation: 2,
   },

   goback: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 90,
    
   }
})