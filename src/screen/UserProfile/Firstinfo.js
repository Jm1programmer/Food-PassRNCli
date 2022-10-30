import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Firstinfo() {
    return <>
        <Text style={styles.name}>João Marcos Rocha</Text>
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