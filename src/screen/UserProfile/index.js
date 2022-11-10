import React from "react";
import { Text, StyleSheet, View } from "react-native";

import Profileheader from "./Profileheader";
import Firstinfo from "./Firstinfo";
import Secondinfo from "./SecondInfo";

import ScreenMenu from "../../components/ChangeScreenMenu";

export default function ProfileScreen() {
    return <>
    <View style={styles.screen}>
     
        <Profileheader />
        <Firstinfo />
        <Secondinfo />
    </View>
    <ScreenMenu />
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
    },

    MyCartText: {
        fontSize: 18,
        marginTop: 30,
        color: '#000',
     
        alignSelf: 'center',
        fontFamily: 'Archivo-Bold',
    },

    CestaInfos: {
        fontSize: 20,
        marginTop: 30,
        color: '#000',
     
        alignSelf: 'center',
        fontFamily: 'Archivo-Bold',
    },
})