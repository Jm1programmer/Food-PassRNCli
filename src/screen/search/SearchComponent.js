import React,{useState} from "react";
import { TextInput, StyleSheet, Dimensions, View } from "react-native";
import Ficon from 'react-native-vector-icons/Feather'
export default function SearchComponent() {
    const [text, setText] = useState('')
    return <>
    <View style={styles.Input}>
    <Ficon name="search" size={25} color="#E81C23" />
    <TextInput style={styles.InputText}        
        placeholder="Pesquise sua comida favorita..."
        selectionColor={'#909090'} 
        value={text}
        onChangeText={setText}
        />
    </View>
     
    </>
}

const height = Dimensions.get('screen').height
    const styles = StyleSheet.create({
        

        Input: {
        
            width: '95%',
            flexDirection: 'row',
            height: height / 15,
            backgroundColor: '#fff',
            marginTop: 30,
            marginVertical: 5,
            alignItems: 'center',
           justifyContent: 'space-between',
           
           borderRadius: 15,
            paddingHorizontal: 25,
            alignSelf:'center',
            elevation: 6,
        },
    
        InputText: {
            
            fontSize: 15,
            color: '#000',
           width: '90%',
           fontFamily: 'Archivo-Regular',
         
        },

      
    })