import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SnapshotViewIOS } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './FirebaseConnection';

export default class AddReceita extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: ''

    };

    this.add = this.add.bind(this);
  }
  add() {
    if (this.state.valor != "") {
      let uid = firebase.auth().currentUser.uid;
      let key = firebase.database().ref('historico').child(uid).push().key
      let user = firebase.database().ref('users')
        .child(firebase.auth().currentUser.uid);

      firebase.database().ref('historico').child(uid).child(key).set({
        type: 'receita',
        valor: this.state.valor
      });


      user.once('value').then((snapshot) => {

        let saldo = parseFloat(snapshot.val().saldo);

        saldo += parseFloat( this.state.valor);

        user.set({
          saldo:saldo
        })
this.props.navigation.goBack();
      })
    }
  }

  render() {
    return (
      <View style={styles.conteirner}>
        <Text>Quanto você quer adicionar?</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={this.state.valor}
          onChangeText={(valor) => this.setState({ valor })}
          autoFocus
        />
        <Button title='Adicionar' onPress={this.add} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteirner: {
    flex: 1,
    margin: 10
  },
  input: {
    height: 40,
    backgroundColor: '#DDDDDD',
    marginTop: 20,
    marginBottom: 20
  }
});