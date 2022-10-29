
import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, Alert, Button } from "react-native";
import RedGradient from "../../../assets/BackgroundGradients/RedGradient.png"
import { CarregaRecomendados } from "../../services/RecomendadosDados";
import { useNavigation } from '@react-navigation/native';


import BuyScreen from "../BuyScreen";

export default function Recomendados( ) {
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

 function Carts({nome, imagemHome, preco, desc,  Tempo, nota, imagem }) {
    const navigation = useNavigation()
    const Preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return <>
<TouchableOpacity onPress={() => {
    navigation.navigate('Buy', {nome: nome, Imagem: imagem, preco: preco, desc: desc, Tempo: Tempo, nota: nota,})
 } }>
        <View style={styles.cart}>
        <Image style={styles.background} source={RedGradient} />
        <Text style={styles.foodName}>{nome}</Text>
        
        <Image style={styles.food} source={imagemHome} resizeMode={'contain'} />
        <Text style={styles.Money}>{`${Preco}`}</Text>
    
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