import React from "react";
import { SafeAreaView } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import HomeScreen from "./src/screen/home/HomeApp";

export default  function App() {
  return <>
      <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
    headerShown: false
  }} >
        <Stack.Screen name="Home" component={HomeScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  </>
 

}