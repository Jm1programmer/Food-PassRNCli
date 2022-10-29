import React, {Text} from "react";
import { SafeAreaView } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import HomeScreen from "./src/screen/home/HomeApp";
import SearchScreen from "./src/screen/search/SearchApp";
import BuyScreen from "./src/screen/BuyScreen";
import BuyConfirmScreen from "./src/screen/BuyConfirm/Index";

export default  function App() {
  return <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
    headerShown: false
  }} 
  >
        <Stack.Screen name="Home" component={HomeScreen}  />
      
        <Stack.Screen name="Buy" component={BuyScreen}  />
        <Stack.Screen name="buyConfirm" component={BuyConfirmScreen}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  </>
 

}

