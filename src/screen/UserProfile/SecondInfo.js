import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Categories from "./SecondInfo/SecondInfoCategories";
import Credentials from "./SecondInfo/Credentials";
export default function Secondinfo() {
    return <>
    <View style={styles.Info}>
        <View style={styles.InfoBox}>
            <Categories />
            <Credentials />
        </View>
    </View>
    </>
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    Info: {
        marginTop: 10,
        
    },
    InfoBox: {
        width: windowWidth / 1.2,
       height: windowHeight / 2.5,
       backgroundColor: '#fff',
       alignSelf: 'center',
       borderRadius: 20,
       elevation: 10,
        
    },

   
})