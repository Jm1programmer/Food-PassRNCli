import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import SearchMenu from "./SearchMenu";
import ScreenMenu from "../../components/ChangeScreenMenu";

export default function SearchScreen() {
   
    return <>
    <View style={styles.screen}>
   
      <SearchMenu />
        
    </View>
   
    <ScreenMenu />
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
    }
})