import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackRoutes from "./src/screen/StackRoutes";


export default  function App() {
  return <>
      <NavigationContainer>
      <StackRoutes />
      
    </NavigationContainer>
    
  </>
 

}

