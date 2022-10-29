import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./header";
import Info from "./Info";

export default function BuyScreen( { navigation }) {
    return <>
    <View style={styles.screen}>
      
       <Header />
        <Info />
    </View>
   
    
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
    }
})