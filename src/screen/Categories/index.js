import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ScreenMenu from "../../components/ChangeScreenMenu";
import Header from "./header";
import Menu from "./CategoriesMenu";

export default function CategoriesScreen() {
   
    return <>
    <View style={styles.screen}>
    <View style={styles.ViewMenu}>
     <Menu style={styles.menu} header={Header} />
   </View>
    </View>
    <ScreenMenu />
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
        width: '100%',
        height: '100%',
    
    },
    menu: {
      
    },
    ViewMenu: {
       
        width: '100%',
        minHeight: 10,
        
    },
})