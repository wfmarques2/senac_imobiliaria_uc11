//import React from "react";
import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Navigators/StackNavigator";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator

import Database from './src/Database/Database'
import ListaTarefas from './src/Componentes/ListaImovel'
import Cadastrar from "./src/Screens/Cadastrar";
import Listar from "./src/Screens/Listar";



//export default function App(){
  export default class App extends Component {
    
  
    render() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    )
  }
}