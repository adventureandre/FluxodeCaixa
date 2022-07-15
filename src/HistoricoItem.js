import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HistoricoItem extends Component {
    constructor(props) {
        super(props);

        let bg = "#00FF00";
        if (this.props.data.type == 'despesa') {
            bg = '#FF0000';
        }

        this.state = {
            bg:bg
        };
    }

    render() {
        return (
            <View style={[style.conteiner,{backgroundColor:this.state.bg}]}>
                <Text>{this.props.data.type}</Text>
                <Text>R$ {this.props.data.valor}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    conteiner: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    }
})