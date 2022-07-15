import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      saldoGeral: 0
    };

    firebase.database().ref('users').on('value', (snapshot) => {
     if(snapshot){
      let state = this.state;
      state.saldoGeral = 0;

      snapshot.forEach((childSaldo) => {
        state.saldoGeral += parseFloat( childSaldo.val().saldo);

      });
      this.setState(state);

     }
    });


    this.cadastrar = this.cadastrar.bind(this);
    this.login = this.login.bind(this);
  }
  cadastrar() {
    this.props.navigation.navigate('Cadastro');
  }
  login() {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <ImageBackground source={require('../assets/images/fundo.jpg')} style={styles.bg} >
        <View style={styles.conteiner}>
          <Text style={styles.title} >Fluxo de Caixa</Text>
          <View style={styles.buttonArea}>
            <TouchableHighlight underlayColor="#CCCCCC" style={styles.button} onPress={this.cadastrar}>
              <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor="#CCCCCC" style={styles.button} onPress={this.login}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.numerosArea}>
            <Text style={styles.numerosAreaText}>No momento adminstramos:</Text>
            <Text style={styles.numerosAreaValor}>R$ {this.state.saldoGeral}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: null
  },
  conteiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  buttonArea: {
    marginTop: 30
  },
  numerosArea: {
    height: 80,
   alignItems:"center",
  },
  numerosAreaText:{
    fontSize:15,
    color:'#FFFFFF'
  },
  numerosAreaValor:{
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'bold'
  }
  ,
  button: {
    backgroundColor: '#bfb300',
    margin: 10,
    height: 40,
    width: 200,
    justifyContent: "center"
  },
  btnText: {
    color: '#ffffff',
    textAlign: "center",
  }
});