import React, { Component } from 'react'
import Home from '../src/Screens/Home';
import Cadastrar from '../src/Screens/Cadastrar';
import Listar from '../src/Screens/Listar';


import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen component={Home} name="Home" />
            <Stack.Screen component={Cadastrar} name="Cadastrar" />
            <Stack.Screen component={Listar} name="Listar" />

        </Stack.Navigator>
        

    )
}