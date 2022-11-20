import React, {useState, useEffect} from "react";
import { Text, Image, View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Button } from "react-native";
import auth from '@react-native-firebase/auth'
import { Controller, useForm  } from "react-hook-form";
import { ActivityIndicator } from "react-native";

import Ficon from 'react-native-vector-icons/Feather'
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
   Email: yup.string().email('Email Invalido').required('Informe seu email'),
    Password:  yup.string().min(6)
})

import Logo from '../../../assets/Logo.png';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";
export default function Form() {

    const navigation = useNavigation()
    const [HideText, sethideText] = useState(false)
    const [buttonAction, setButtonAction] = useState('Normal')
    const { control, handleSubmit, formState: {errors}} = useForm({
            resolver: yupResolver(schema)
    })

    function handleSignIn(data) {
        auth().signInWithEmailAndPassword(
            data.Email, 
            data.Password
            )
            .then(() => {
                setButtonAction('Loading') 
            })
            .catch((error) =>{ 
                console.log(error)
                setButtonAction('Error') 
            })
    }

    function Button(){
        if (buttonAction == 'Normal') {
        return <>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
        <View>
        <Text style={styles.TextButton}>Login</Text>
            
        </View>
           
       </TouchableOpacity>

    
       </>
        } else if (buttonAction == 'Loading') {

       return <>
          <View style={styles.button} onPress={handleSubmit(handleSignIn)}>
        <View>
        <ActivityIndicator size={'large'} color={'#fff'} />
        </View>
           
       </View>
       </>
        } else if (buttonAction === 'Error') {
            return <>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                <View>
                <Ficon style={styles.IconLeft} name="x-circle" size={35} color="#f2f7f2" />
                </View>
           
       </TouchableOpacity>
             
            </>
        }
        
    }

   
    return <>
  
    <View style={styles.form}>




    <Controller control={control} name="Email"
            render={({ field: { onChange, onBlur, value}}) => (
                
                <View  style={[styles.Input, {
                    borderColor: errors.Email?  'red' : '#dbdbdb',
                    
                }]}>
                <TextInput style={styles.InputText}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Email"
                    selectionColor={'#909090'}
                    
                />
        

            </View>
             
            )}/>{errors.Email && <Text style={styles.errorsText}>{errors.Email?.message}</Text>   } 
            
            


<Controller control={control} name="Password"
            render={({ field: { onChange, onBlur, value}}) => (
                <View style={[styles.Input, {
                    borderColor: errors.Password?  'red' : '#dbdbdb',
                 
                }]}>
                <TextInput style={styles.InputText}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Senha"
                    selectionColor={'#909090'}
                    secureTextEntry={HideText}
                />
        <TouchableOpacity onPress={() => { sethideText(!HideText) }}>
            <Icon name={ HideText? "eye-off" : "eye"} size={30} color={"#808080"} />
       </TouchableOpacity>

            </View>
             
            )}/>{errors.Password && <Text style={styles.errorsText}>{errors.Password?.message}</Text>}

        <Button />

       <TouchableOpacity style={styles.Register}  onPress={() => {
          navigation.navigate('SignUp')
       }}>
            <Text style={styles.TextRegister}>Ainda não se Registrou?</Text>
       </TouchableOpacity>
    
    </View>
       
    
    </>

    
}
const height = Dimensions.get('window').height;


const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        marginVertical: 10,
    },


    Input: {
        width: '95%',
       
        flexDirection: 'row',
        height: height / 16,
        backgroundColor: '#FAFAFA',
        marginVertical: 5,
        alignItems: 'center',
       justifyContent: 'space-between',
       borderWidth: 1,
       borderColor: '#dbdbdb',
       borderRadius: 60,
       
        paddingHorizontal: 25,
        
    },

    InputText: {
        fontFamily: 'Archivo-Regular',
        fontSize: 16,
        color: '#909090',
       width: '90%',
       height: '110%',

    
     
    },

    button: {
        width: '95%',
       
        flexDirection: 'row',
        height: height / 15,
        backgroundColor: '#E81C23',
        marginVertical: 5,
        alignItems: 'center',
       justifyContent: 'space-between',
       borderWidth: 1,
       borderColor: '#dbdbdb',
       borderRadius: 6,
       alignItems: 'center',
       justifyContent: 'center',
        paddingHorizontal: 25,
    },
    TextButton: {
        fontFamily: 'Archivo-Bold',
        fontSize: 16,
        color: '#fff',

     
    },
    errorsText: {
        fontFamily: 'Archivo-Regular',
        fontSize: 14,
        color: '#E81C23',
 

    },
    Register: {
        alignItems: 'flex-end',
        width: '90%'
    },

    TextRegister: {
        fontFamily: 'Archivo-SemiBold',
        fontSize: 14,
        color: '#E81C23',
        
    },
})