import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchMenu from "./SearchMenu";

export default function SearchScreen() {
    return <>
    <View style={styles.screen}>
        
      <SearchMenu />
        
    </View>
   
    
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
    }
})