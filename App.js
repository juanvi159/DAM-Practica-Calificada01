import React, {Component} from 'react';
import ConexionFetch from './app/components/conexionFetch/ConexionFetch';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetallesDigimon from './app/components/reactNavigation/ReactNavigation';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConexionFetch">
        <Stack.Screen name="Digimons" component={ConexionFetch} />
        <Stack.Screen name="DetallesDigimon" component={DetallesDigimon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;