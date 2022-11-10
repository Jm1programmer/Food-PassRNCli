import React, {useState,useEffect} from "react";
import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native';


import StackRoutes from "./src/screen/StackRoutes";


export default  function App() {
  
  return <>



      <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
    
  </>
 

}

