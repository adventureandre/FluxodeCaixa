import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import firebase from  './FirebaseConnection';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {};

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.navigation.navigate('Interna');
        } else {
          this.props.navigation.navigate('Home');
        }
  
  
      });
}

  render() {
    return (
      <ImageBackground source={require('../assets/images/fundo.jpg')} style={styles.bg}>
        <View style={styles.conteiner}>
          <Text style={styles.title} >Fluxo de Caixa</Text>
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
  }
});