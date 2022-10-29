import React, {Text} from "react";
import { SafeAreaView } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import HomeScreen from "./src/screen/home/HomeApp";
import SearchScreen from "./src/screen/search/SearchApp";
import BuyScreen from "./src/screen/BuyScreen";
import BuyConfirmScreen from "./src/screen/BuyConfirm/Index";

import StackRoutes from "./src/screen/StackRoutes";


export default  function App() {
  return <>
      <NavigationContainer>
      <StackRoutes />
      
    </NavigationContainer>

    
  </>
 

}

