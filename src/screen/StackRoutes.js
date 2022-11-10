import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator();

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import HomeScreen from "./home/HomeApp";
import BuyScreen from "./BuyScreen";
import BuyConfirmScreen from "./BuyConfirm/Index";
import SearchScreen from "./search/SearchApp";
import ShoppingCartScreen from "./ShoppingCart";
import ProfileScreen from "./UserProfile";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";



export default function StackRoutes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

    useEffect(() => {
       const unsubscribe = auth().onAuthStateChanged((user_) =>{
          setUser(user_)
          if (initializing) {
            setInitializing(false)
          }
        })

        return unsubscribe
    }, [])

    if (initializing) {
    return (
      <View style={styles.loading}>
       <ActivityIndicator size={'large'} />
      </View>
     
    )
    }

    return (
      <Stack.Navigator 
      screenOptions={{
    headerShown: false
  }}>
        {user == null ? (
          // User isn`t signed in
          <>
          <Stack.Screen name="SignIn" component={SignIn}  />
        <Stack.Screen name="SignUp" component={SignUp}  />  
          </>
          
         
        ) : (
          <>
          <Stack.Screen name="Home" component={HomeScreen}  />
          <Stack.Screen name="Buy" component={BuyScreen}  />
        <Stack.Screen name="buyConfirm" component={BuyConfirmScreen}  />
        <Stack.Screen name="Search" component={SearchScreen}  />
        <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen}  />
        <Stack.Screen name="Profile" component={ProfileScreen}  />
          </>
          // User is signed in
  
        )}
      </Stack.Navigator>
    );

  

  
}

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
})