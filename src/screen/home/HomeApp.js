import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";

import Categories from "./categories";
import Header from "./header";
import Info from "./Info";
import FoodMenu from "./FoodMenu";
import Recomendados from "./recomendados";
import ScreenMenu from "../../components/ChangeScreenMenu";

import { NavigationContainer } from "@react-navigation/native";

export default function HomeScreen() {
    
    return <>
    <View style={styles.screen}>
        
        <FoodMenu header={Header}  info={Info} categories={Categories} recomendados={Recomendados} />
       
        
    </View>
    <ScreenMenu />
   
    
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#F1EFF1',
    }
})