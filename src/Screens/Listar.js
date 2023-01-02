import React, { Component } from 'react'
import {
    View, Text, Button, ScrollView,
    TextInput, DevSettings, TouchableOpacity, StyleSheet
} from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler';

//import ListaTarefas from '../Componentes/ListaImovel'
import ListaImovel from '../Componentes/ListaImovel'

import Database from '../Database/Database'
//import Database from './src/Database/Database'

//export default function Cadastrar(){
export default class Listar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaImovel: []
        }
        this.ListarImovel()
    }

    ListarImovel = () => {
        const banco = new Database();
        banco.Listar().then(lista => { this.setState({ listaImovel: lista }) })
    }
/*
    LiberarImovel = (id) => {
        const banco = new Database();
        banco.LiberarImovel(id);
        this.ListarImovel()
        //DevSettings.reload();
        //muda status para imovel já livre e está disponível
      }
    
      NegociarImovel = (id) => {
        const banco = new Database();
        banco.Negociar(id);
        this.ListarImovel()
        //DevSettings.reload();
        //muda status para imovel já negociado e não está disponível
      }
  */  
      DeletarImovel = (id) => {
        const banco = new Database();
        banco.Deletar(id);
        this.ListarImovel()
        //DevSettings.reload();
      }

    render() {
        return (
            <ScrollView>
                <Text>Imóveis disponíveis</Text>

                {
                    this.state.listaImovel.map(item => (
                        <ListaImovel style={styles.descricao}
                            key={item.id}
                            id={item.id}
                            titulo={item.titulo}
                            endereco={item.endereco}
                            finalidade={item.finalidade}
                            valores={item.valores}
                            foto={item.foto}
                            aprovar={this.AprovarImovel}
                            reprovar={this.ReprovarImovel}
                            deletar={this.DeletarImovel}
                        />))
                }
            </ScrollView> 
        )
    }
}

const styles = StyleSheet.create({
    descricao: {
        fontSize: 20,
        color: '#787878',
        fontWeight: 'bold',
      },
});
