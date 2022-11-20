import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Ficon from 'react-native-vector-icons/Feather'
import FAicon from 'react-native-vector-icons/FontAwesome'
import Aicon from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from "@react-navigation/native";


export default function Info() {
    [quantidade, setQuantidade] = useState(1)

    const navigation = useNavigation()

    const route = useRoute()
    const priceOld = Number(quantidade * route.params.preco)
    const preco = route.params.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    const price = priceOld.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    const Tempo = Number(route.params.Tempo * quantidade)
    return <>
    <View style={styles.Info}>
      <ScrollView>
       <View style={styles.NameAndQuantidy}>
            	<Text style={styles.FoodName}>{route.params.nome}</Text>

                <View style={styles.quantidy}>
                    <TouchableOpacity style={styles.buttonQuantidy} onPress={() => {
                        if(quantidade > 1) {
                        setQuantidade( quantidade - 1)
                        }
                    }}>
                        <Ficon name="minus" size={20} color="#fff" />
                    </TouchableOpacity>
                    


                    <View style={styles.number}>
                      <Text style={styles.TextQuantidy}>{quantidade}</Text>
                    </View>

                    <TouchableOpacity style={[styles.buttonQuantidy, styles.buttonQuantidyColor]} onPress={() => {
                        setQuantidade(quantidade + 1)
                    }}>
                         <Ficon name="plus" size={20} color="#fff" />
                    </TouchableOpacity>
                    
                  
                </View>

       </View>

       <Text style={styles.Price}>{ preco}</Text>

       <View style={styles.SobreView}>
        <Text style={styles.sobreText}>Sobre</Text>
        <Text style={styles.sobreDesc}>{route.params.desc}</Text>
       </View>

            <View style={styles.DeliveryTime}>
                <View style={styles.ClockIconView}>
                <Aicon name="clockcircle" size={25} color="#808080" />
                </View>
                <View style={styles.DeliveryTexts}>
                    <Text style={styles.DeliveryTitle}>Tempo de Entrega</Text>
                    <Text style={styles.DeliveryNumber}>{`${Tempo} minutos`}</Text>
                </View>
            </View>
            </ScrollView>
            
            
    </View>

    <View style={styles.BuySection}>

            <TouchableOpacity style={styles.buyButton} onPress={() => {
                navigation.navigate("buyConfirm")
            }}>
                    <Text style={styles.buttonQuanty}>{`${quantidade} items`}</Text>
                  
                    <Text style={styles.buttonPrice}><Text style={styles.ButtonNumberPrice}>{` ${(price)}`}</Text></Text>
            </TouchableOpacity>
            </View>
        
   
    
    </>
}
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

    Info: {
        marginHorizontal: 20,
        marginVertical: 15,
        width: '100%'
    },

    NameAndQuantidy: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    FoodName: {
        fontSize: 26,
       
        color: '#000',
     
        
        fontFamily: 'Archivo-Regular',
    },

    quantidy: {
        marginRight: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },

    number: {
        width: 40,
        height: 20,
        backgroundColor: '#EAE9EA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TextQuantidy: {
        fontSize: 14,
        color: "#808080",
        fontFamily: 'Archivo-Regular',
       
    },
    buttonQuantidy: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808080'
    },

    buttonQuantidyColor: {
        backgroundColor: '#E81C23'
    },

    Price: {
        fontSize: 25,
        color: '#E81C23',
        fontFamily: 'Archivo-Bold',
    },

    sobreText: {
        fontSize: 20,
        color: "#000",
        fontFamily: 'Archivo-SemiBold',
        marginTop: 10,
    },
    sobreDesc: {
        fontSize: 16,
        color: "#808080",
        fontFamily: 'Archivo-Regular',
        marginTop: 1,
        width: '95%'
    },


    DeliveryTime: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    ClockIconView: {
        width: 80,
        height: 40,
        borderColor: "#808080",
        borderWidth: 2,
        outlineColor: "#808080",
        outlineStyle: "solid",
        outlineWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    DeliveryTexts: {
        marginHorizontal: 8,
    },
    DeliveryTitle: {
        fontSize: 18,
        color: "#000",
        fontFamily: 'Archivo-SemiBold',
    },

    DeliveryNumber: {
        fontSize: 14,
        color: "#808080",
        fontFamily: 'Archivo-Regular',
        
       
    },

    BuySection: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: windowHeight / 7,
        
    },

    buyButton: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: '90%',
        height: 60,
        backgroundColor: '#E81C23',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30
        
    },

    buttonQuanty: {
        fontSize: 16,
        color: "#fff",
        fontFamily: 'Archivo-Regular',
    },

    buttonPrice: {
        fontSize: 20,
        color: "#fff",
        fontFamily: 'Archivo-SemiBold',
    },

    ButtonNumberPrice: {
        fontSize: 23,
    }
})