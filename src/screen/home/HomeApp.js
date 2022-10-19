import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Categories from "./categories";
import Header from "./header";
import Info from "./Info";

export default function HomeScreen() {
    return <>
    <View style={styles.screen}>
        <Header />
        <Info />
        <Categories />
        
    </View>
   
    
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
    }
})