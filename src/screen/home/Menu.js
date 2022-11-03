import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Ficon from 'react-native-vector-icons/AntDesign'
import storage from '@react-native-firebase/storage';

export default function Menu({nome, imagem, preco, desc,  Tempo, nota,  }) {
        const [ selecionado, setSelecionado] = useState(false);

        const [imageUrl, setImageUrl] = useState(undefined);

        useEffect(() => {
            setImageUrl( imagem)
          }, []);

        const navigation = useNavigation()
        const Preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return <>
        
        <TouchableOpacity style={styles.cartao} onPress={() => {
              navigation.navigate('Buy', {nome: nome, imagem: imagem, preco: preco, desc: desc, Tempo: Tempo, nota: nota,})
        }}>
                <Image style={styles.imagem} source={{uri: imageUrl}} accessibilityLabel={nome} />
                <View style={styles.info}>
                <View>
                <Text style={styles.nome}>{ nome }</Text>
                </View>
                <Text style={styles.desc}> { desc }</Text>

                <View style={styles.Info} >
                    
                <Text style={styles.Tempo}> { `${Tempo} min` }</Text>
                 <View style={styles.nota}>
                 <Ficon name="staro" size={20} color="#000" />
                    <Text style={styles.textNota}> { nota }</Text></View>
                </View>
               

                <Text style={styles.preco}> { Preco }</Text>
               
                <View style={styles.AddFood} >  
                <Ficon name="plus" size={18} color="#fff" />
                </View>
                </View>
               
                
              
        </TouchableOpacity>
    
        </>
}

const styles = StyleSheet.create({
        cartao: {
            backgroundColor: "#F6F6F6",
            marginVertical: 10,
            marginHorizontal: 8,
            borderRadius: 6,
            flexDirection: 'row',
            Minheight: 120,
            maxHeight: 135,
            // Android
            elevation: 2,

           
            

            // Ios
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

        },
        imagem: {
                width: 80,
                height: 80,
                borderRadius: 20,
                marginVertical: 16,
                marginLeft: 16,
                alignSelf: 'center',
        },
        info: {
                flex: 1,
               
                justifyContent: 'space-between',
                marginLeft: 10,
                marginVertical: 10,
                marginRight: 16,
        },
        nome: {
                fontSize: 18,
                lineHeight: 22,
                fontFamily: 'Archivo-SemiBold',
                color: '#000'
        },
        desc: {
            fontSize: 12,
            lineHeight: 19,
            color: '#808080',
            width: 200,
            fontFamily: 'Archivo-Regular',
        },
        Tempo: {
                fontSize: 12,
                lineHeight: 19,
                color: '#808080',
                marginTop: 2,
                fontFamily: 'Archivo-Regular',
        },

        preco: {
            fontSize: 16,
            lineHeight: 19,
            color: '#000',
            alignSelf: 'flex-end',
            
            fontFamily: 'Archivo-SemiBold',
            
        },

        AddFood: {
            position: 'absolute',
            alignSelf: 'flex-end',
            width: 30,
            height: 30,
            backgroundColor: '#E81C23',
            borderRadius: 22,
            alignItems: 'center',
            justifyContent: 'center',
        },

        Info: {
            flexDirection: 'row',
            marginTop: 4,
        },

        nota: {
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },

        textNota: {
            fontSize: 12,
            lineHeight: 19,
            color: '#808080',
            marginLeft: 2,
            fontFamily: 'Archivo-Regular',
        }
})