
import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Ficon from 'react-native-vector-icons/Feather'



import CategoriesFlatList from "../../components/CategoriesFlatList";

export default function Categories() {

    return <>
    <View style={styles.categories}>
        <Text style={styles.title}>Categorias</Text>
        <CategoriesFlatList />
    </View>
    </>
}

const styles = StyleSheet.create({
    categories: {
        marginLeft: 10,
        marginTop: 30,
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        color: "#000",
        fontFamily: 'Archivo-SemiBold',
       
    },

})