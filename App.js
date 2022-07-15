import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Interna from './src/Interna';
import Preload from './src/Preload';
import AddReceita from './src/AddReceita';
import AddDespesa from './src/AddDespesa';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Preload" component={Preload}
          options={{
            title: 'Home',
            headerShown: null
          }} />

        <Stack.Screen name="Interna" component={Interna}
          options={{
            title: 'Home',
            headerShown: null
          }} />


        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: null
          }} />


        <Stack.Screen name="Login" component={Login}
          options={{
            headerStyle: { backgroundColor: "#FFFF00" }
          }} />


        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{
            headerStyle: { backgroundColor: "#FFFF00" }
          }} />


        <Stack.Screen name="AddReceita" component={AddReceita}
          options={{
            title: 'Adicionar Receita',
            headerStyle: { backgroundColor: "#FFFF00" }
          }} />


        <Stack.Screen name="AddDespesa" component={AddDespesa}
          options={{
            title: 'Adicionar Despesa',
            headerStyle: { backgroundColor: "#FFFF00" }
          }} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


