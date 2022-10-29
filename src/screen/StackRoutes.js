import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from "./home/HomeApp";
import BuyScreen from "./BuyScreen";
import BuyConfirmScreen from "./BuyConfirm/Index";
import SearchScreen from "./search/SearchApp";


export default function StackRoutes() {
    return <>
    

      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
    headerShown: false
  }} 
  >
        <Stack.Screen name="Home" component={HomeScreen}  />
      
        <Stack.Screen name="Buy" component={BuyScreen}  />
        <Stack.Screen name="buyConfirm" component={BuyConfirmScreen}  />
        <Stack.Screen name="Search" component={SearchScreen}  />
        
      </Stack.Navigator>
      



    
    </>
}