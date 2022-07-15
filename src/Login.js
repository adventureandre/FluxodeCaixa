import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './FirebaseConnection';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      senhaInput: ''
    };

    this.entrar = this.entrar.bind(this);

    firebase.auth().signOut();

  }
  entrar() {
    if (this.state.emailInput != '' && this.state.senhaInput != '') {

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.props.navigation.navigate('Interna');
        }
      });

      firebase.auth().signInWithEmailAndPassword(
        this.state.emailInput,
        this.state.senhaInput
      ).catch((error) => {
        alert(error.code);
      });

    }

  }

  render() {
    return (
      <View style={styles.conteiner}>
        <Text>Email:</Text>
        <TextInput style={styles.input} onChangeText={(emailInput) => this.setState({ emailInput })} />

        <Text>Senha:</Text>
        <TextInput secureTextEntry style={styles.input} onChangeText={(senhaInput) => this.setState({ senhaInput })} />
        <Button title="Entrar" onPress={this.entrar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    margin: 10
  },
  input: {
    height: 40,
    backgroundColor: '#CCCCCC',
    padding: 5,
    marginBottom: 10
  }
}); 