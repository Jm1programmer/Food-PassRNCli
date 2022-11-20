import React, {useState, useTransition} from "react";
import { Text, Image, View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Alert } from "react-native";
import auth from '@react-native-firebase/auth'

import { Controller, useForm  } from "react-hook-form";
import firestore from '@react-native-firebase/firestore';


import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
   Email: yup.string().email('Email Invalido').required('Informe seu email'),
   Name: yup.string().required('Informe seu nome'),
    Password:  yup.string().min(6).required('Informe sua senha')
})

import Logo from '../../../assets/Logo.png';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";
export default function Form() {


    
    const [HideText, sethideText] = useState(false)
    const { control, handleSubmit, formState: {errors}} = useForm({
            resolver: yupResolver(schema)
    })

 

    function handleSignIn(data) {
        auth()
  .createUserWithEmailAndPassword(
    data.Email,
     data.Password
     )
  .then((userCredential, ) => {
    const user = userCredential.user
    user.updateProfile({
        displayName: 'Alias',
    })
        firestore()
  .collection('users')
  .doc(user.uid)
  .set({
   email: user.email,
   name: data.Name,
  })
    console.log('user', '=>', user);
    

  }).catch(error => {
    if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }
  
      console.error(error);
  })
        
    }
    return <>
  
    <View style={styles.form}>


    <Controller control={control} name="Name"
            render={({ field: { onChange, onBlur, value}}) => (
                <View  style={[styles.Input, {
                    borderColor: errors.Name?  'red' : '#dbdbdb',
                 
                }]}>
                <TextInput style={styles.InputText}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Nome completo"
                    selectionColor={'#909090'}
                    
                />
        

            </View>
             
            )}/>{errors.Name && <Text style={styles.errorsText}>{errors.Name?.message}</Text>}




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
             
            )}/>{errors.Email && <Text style={styles.errorsText}>{errors.Email?.message}</Text>}


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


        

       
  
       <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
            <Text style={styles.TextButton}>Registre-se</Text>
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
 

    }
})