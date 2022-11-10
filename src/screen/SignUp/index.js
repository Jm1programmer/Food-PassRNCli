import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "./header";
import Form from "./form";
export default function SignUp() {
    return <>
    <View style={styles.screen}>
    <Header />
    <Form />
    </View>
   
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
        justifyContent: 'flex-start'
    },
})