// Criar uma stack route. Uma classe de rotas

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../pages/Login';


const Stack = createNativeStackNavigator();


function StackNavigator(){
  return (
  
       <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} /> 
      </Stack.Navigator>
   
  );
}

//chamando a stack.route.js = vai executa a função AppRoutes(passar o container = login...)
function AppRoutes(){
  return(
      <NavigationContainer>
          <StackNavigator />
      </NavigationContainer>
  )
}
export default AppRoutes;