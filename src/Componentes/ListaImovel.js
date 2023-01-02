import React, { Component } from 'react'
//import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import {
  View, ScrollView, Text, TouchableOpacity,
  StyleSheet, Image, FlatList, Button, LogBox
} from 'react-native';

import CameraRoll from "@react-native-community/cameraroll";

export default class ListaImovel extends Component {
  getEstilo() {
    if (this.props.feito == 'Sim') {
      return { flex: 1, borderRadius: 10, backgroundColor: '#00ff2a', padding: 10 }
    } else if (this.props.feito == 'Atrasado') {
      return { flex: 1, borderRadius: 10, backgroundColor: '#faff0f', padding: 10 }
    } else {
      ListaImovel
      return { flex: 1, borderRadius: 10, backgroundColor: 'white', padding: 10 }
    } 
  }

  render() {
    return (
      <View style={{ margin: 5 }}>
        <View style={this.getEstilo()}>
          <View style={{ flex: 1 }}>

            <Text style={estilo.descricao} >ID: {this.props.id}</Text>
            <Text style={estilo.descricao} >Título: {this.props.titulo}</Text>
            <Text style={estilo.descricao} >Endereço: {this.props.endereco}</Text>
            <Text style={estilo.descricao} >Finalidade: {this.props.finalidade}</Text>
            <Text style={estilo.descricao} >Valores: {this.props.valores}</Text>
            <Image
              style={estilo.foto}
              source={{ uri: this.props.foto }}
            />
            {/*<Text>foto: {this.props.foto}</Text>
            */}

          </View>

          <Text></Text>

          <View style={{ flex: 1, flexDirection: 'row', }}>
{/*}
            <TouchableOpacity
              onPress={() => { this.props.imovellivre(this.props.id) }}
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 5,
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
                height: 30,
                backgroundColor: '#39bf00'
              }}>
              <Text style={{ color: 'white' }}>Imovel disponível</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { this.props.imovelnegociado(this.props.id) }}
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 5, alignItems: 'center',
                justifyContent: 'center',
                width: 100, height: 30,
                backgroundColor: '#db5a04'
              }}>
              <Text style={{ color: 'white' }}>Imovel negociado</Text>
            </TouchableOpacity>
            */}
            <TouchableOpacity onPress={() => { this.props.deletar(this.props.id) }} style={{
              flex: 1,
              flexDirection: 'row',
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              height: 30,
              backgroundColor: 'red'
            }}>
              <Text style={{ color: 'white' }}>REMOVER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}

const estilo = new StyleSheet.create({
  foto: {
    width: 100,
    height: 100,
  },
  descricao: {
    fontSize: 16,
    color: '#787878',
    fontWeight: 'bold',
  },
})