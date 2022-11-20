import React,{useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

export default function Firstinfo() {
  const user = auth().currentUser;
  const [userInfo, SetuserInfo] = useState('')
  firestore()
  .collection('users')
  .doc(user.uid)
  .get()
  .then(documentSnapshot => {
    
    if (documentSnapshot.exists) {
      const userInfo_ = {
        nome: documentSnapshot.data().name,
      }
    
     SetuserInfo(userInfo_)
     
    }
  });

    return <>
        <Text style={styles.name}>{userInfo.nome}</Text>
        <Text style={styles.ProfileInfo}>Estudante 9 Ano A</Text>
    </>
}

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    marginTop: 10,
    color: '#000',
 
    alignSelf: 'center',
    fontFamily: 'Archivo-Bold',
  },

  ProfileInfo: {
    fontSize: 16,
    marginTop: 4,
    color: '#808080',
 
    alignSelf: 'center',
    fontFamily: 'Archivo-Regular',
  },

   
})