import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
    //export default class Home extends Component({ navigation }) {
    //    render() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        
            <Text style={estilo.titulo} >Imobiliária</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Cadastrar')}
                style={{
                    
                    flexDirection: 'row',
                    margin: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 30,
                    backgroundColor: '#39bf00'
                }}>
                    <Text style={{color: 'white'}}>CADASTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Listar')}
                style={{
                    
                    flexDirection: 'row',
                    margin: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 30,
                    backgroundColor: '#390f00'

                }}>
                    <Text style={{color: 'white'}}>LISTAR</Text>
            </TouchableOpacity>

            {/*<Button title="Cadastrar" onPress={() => navigation.navigate('Cadastrar')} />
            <Button title="Listar" onPress={() => navigation.navigate('Listar')} />
            */}
        </View>
    )
}
//}


const estilo = new StyleSheet.create({
    
    titulo: {
      fontSize: 40,
      color: '#787878',
      fontWeight: 'bold',
    },
  })