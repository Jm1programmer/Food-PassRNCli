import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, Alert, Button } from "react-native";
import RedGradient from "../../../assets/BackgroundGradients/RedGradient.png"
import { CarregaRecomendados } from "../../services/RecomendadosDados";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BuyScreen from "../BuyScreen";

export default function Recomendados( {navigation }) {
const [lista, setLista] = useState([]);
 
    useEffect(() => {
        const retorno = CarregaRecomendados();
       
        
       setLista(retorno.lista);
    }, []);

    return <>
    <View style={styles.Recomendados}>
        <Text style={styles.title}>Recomendados</Text>

        <FlatList style={styles.FlatList}
        data={lista}
        renderItem={({ item }) =>  <Carts {...item}  />  }
        keyExtractor={({nome}) => nome}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        
         />
       
    </View>
    </>
}

 function Carts({nome, imagem, preco, desc,  Tempo, nota, navigation  }) {
    return <>
<TouchableOpacity onPress={() => { navigation.navigate()}} >
        <View style={styles.cart}>
        <Image style={styles.background} source={RedGradient} />
        <Text style={styles.foodName}>{nome}</Text>
        
        <Image style={styles.food} source={imagem} resizeMode={'contain'} />
        <Text style={styles.Money}>{preco}</Text>
    
    </View>
</TouchableOpacity>
</>
 }

 




const styles = StyleSheet.create({
    FlatList: {
        width: "100%"
    },
    Recomendados: {
        marginLeft: 10,
       
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        color: "#000",
        fontFamily: 'Archivo-SemiBold',
        marginBottom: 10,
       
    },

    background: {
        position: 'absolute',
        width: 180,
        height: 210,
        borderRadius: 20,
    },
    	carts: {
            flexDirection: 'row'
        },  
    cart: {
        width: 180,
        height: 210,
    
      
        borderRadius: 20,
        backgroundColor: '#fff',
      
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 3,
        
    },  

    Money: {
        fontSize: 20,
        
        color: '#fff',
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontFamily: 'Archivo-SemiBold',
    },

    foodName: {
        fontSize: 18,
        lineHeight: 22,
        marginTop: 10,
        fontFamily: 'Archivo-SemiBold',
        color: '#fff',
        width: 90,
      alignSelf: 'flex-start',
        marginLeft: 20,
    },

    food: {
        width: 120,
        height: 120,
    },



   
})