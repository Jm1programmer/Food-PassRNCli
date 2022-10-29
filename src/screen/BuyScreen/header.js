import React, {useState} from "react";
import { Image, View, TouchableOpacity, Dimensions,StyleSheet, Text  } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

import Ficon from 'react-native-vector-icons/Feather'
import FAicon from 'react-native-vector-icons/FontAwesome'

import FoodImage from '../../../assets/Food/Pizza.png'
import FoodImageTest from '../../../assets/Food/HamburguerCarne.png'

export default function Header(  ) {
 
    [favoritado, SetFavoritado] = useState(false)

    const navigation = useNavigation()
    const route = useRoute()
    return <>
    
    <View style={styles.Header}>
        
       <Image source={route.params.Imagem} style={styles.FoodImage} resizeMode={'cover'} />
       <View style={styles.TextView}>
       <Text style={styles.text}>Detalhes</Text>
       </View>
       <View style={styles.info}>
        <TouchableOpacity  onPress={() => {
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
   }
})