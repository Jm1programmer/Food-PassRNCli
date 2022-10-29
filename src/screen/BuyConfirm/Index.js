import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import Aicon from 'react-native-vector-icons/AntDesign'

export default function BuyConfirmScreen() {
  [Posicao, SetPosicao] = useState(2)
 
  const navigation = useNavigation()
    setTimeout(() => {
        if (Posicao > 0) {
        SetPosicao(Posicao - 1)
        }
    }, 2000)

  
    return <>
    <View style={styles.screen}>
    <Aicon name="checkcircle" size={58} color="#fff" />
     <Text style={styles.ConfirmText}>{Posicao ? <Text>Obrigado Por Comprar!</Text> : <Text>Pode Pegar a Comida!</Text>}</Text>
     <Text style={styles.ConfirmPosicao}>{`Você está na posição ${Posicao}`}</Text>
    </View>
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E81C23',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ConfirmText: {
        fontSize: 26,
       
        color: '#fff',
     
        
        fontFamily: 'Archivo-Regular',
    },

    ConfirmPosicao: {
        fontSize: 18,
       
         color: '#fff',
      
         
         fontFamily: 'Archivo-Regular',
    },
})