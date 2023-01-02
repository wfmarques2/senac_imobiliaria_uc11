//import React, { PureComponent } from 'react';
//import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import React, { Component, useState } from 'react'
import {
  View, Text, Button, ScrollView,
  TextInput, DevSettings, TouchableOpacity, StyleSheet,
  AppRegistry, Image, FlatList, LogBox, RadioButton, CheckBox,
} from 'react-native'

//import Tarefa from '../Models/Tarefa'
import Imovel from '../Models/Imovel'
import Database from '../Database/Database'

import CameraRoll from "@react-native-community/cameraroll"

import ImagePicker from 'react-native-image-crop-picker';
//import Card from '../Components/Card'

//import { RadioButton } from 'react-native-paper';

LogBox.ignoreAllLogs();




//export default function Cadastrar(){
export default class Cadastrar extends Component {


  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      endereco: "",
      finalidade: "",
      valores: "",
      foto: "",
    }
  }

  CadastrarImovel = (titulo, endereco, finalidade, valores, foto) => {
    const novoImovel = new Imovel(titulo, endereco, finalidade, valores, foto)
    const banco = new Database();
    banco.Inserir(novoImovel);
  }
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log("imagem salva no cache" + data.uri);

      CameraRoll.save(data.uri)
      console.log("imagem salva no cameraroll");
      this.setState({ foto: data.uri })
      console.log("endereço capturado");

    }
  };

  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
      waitAnimationEnd: false,
    }).then(image => {
      // NESSA PARTE, SE A FOTO DER CERTO, A FUNÇÃO DE SALVAR O ENDEREÇO DA IMAGEM VAI SER CHAMADA
      this.onSelectedImage(image);
      console.log(image);
    });
  }


  onSelectedImage = image => {
    const source = { uri: image.path };
    // const titleHere = { size: image.size };
    this.setState({ foto: source.uri });
    // this.setState({ title: titleHere })
    console.log("This is source.uri", source.uri, "Type OF: ", typeof (source.uri));
    console.log("foto STATE", this.state.foto);
    // console.log("TITLE STATE", this.state.filePath);
  };


  choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      this.onSelectedImage(image);
      console.log(image);
    });
  }

  chooseTipo = () =>{
  const [isSelected, setSelection] = useState(false);
  }


  render() {



    return (
      <ScrollView>


        {this.state.foto === '' ? (
          <View style={styles.imageEmptyBox}>
            <Text style={styles.noneImage}>Nenhuma imagem selecionada</Text>
          </View>
        ) : (
          <Image source={{ uri: this.state.foto }} style={styles.imageFullBox} />
        )}
        <TouchableOpacity
          onPress={this.choosePhotoFromLibrary}
          style={styles.options}
        >
          <Text style={styles.optionsText}>
            Escolher uma foto da galeria
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.takePhotoFromCamera}
          style={styles.options}
        >
          <Text style={styles.optionsText}>Tirar uma foto</Text>
        </TouchableOpacity>




{/*}
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Do you like React Native?</Text>
          </View>
          <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
        </View>
        */}

        {/*
        <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
    </View>
        */}


        {/*
        <View>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>
      */}

        <TextInput style={styles.noneImage} placeholder='Titulo' onChangeText={(valor) => { this.setState({ titulo: valor }) }} />
        <TextInput style={styles.noneImage} placeholder='Endereço' onChangeText={(valor) => { this.setState({ endereco: valor }) }} />
        <TextInput style={styles.noneImage} placeholder='Finalidade (venda/aluguel)' onChangeText={(valor) => { this.setState({ finalidade: valor }) }} />
        <TextInput style={styles.noneImage} placeholder='Valor' onChangeText={(valor) => { this.setState({ valores: valor }) }} />
        {/*<TextInput placeholder='foto' onChangeText={(valor) => { this.setState({ foto: valor }) }} />
        */}
        <Button title="Cadastrar" onPress={() => { this.CadastrarImovel(this.state.titulo, this.state.endereco, this.state.finalidade, this.state.valores, this.state.foto) }} />




        


        {/*}

        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
          */}








      </ScrollView>
    )
  }












}

const styles = StyleSheet.create({
  imageEmptyBox: {
    width: '100%',
    height: 180,
    backgroundColor: '#aaaaaa',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageFullBox: {
    width: '100%',
    height: 180,
    marginTop: 25,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  listTitle: {
    fontSize: 24,
    color: 'black',
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  noneImage: {
    fontSize: 20,
    color: '#787878',
    fontWeight: 'bold',
  },
  options: {
    backgroundColor: '#3333ff',
    marginBottom: 10,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: '#0000cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsText: {
    color: '#cccccc',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    //flex: 1,
    width: 200,
    height: 200,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },






});

