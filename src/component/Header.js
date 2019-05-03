import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Constants} from 'expo';

export default class Header extends React.Component {
  render() {
    return (
        <View style={style.container}>
            <Text style={style.header}>Yiko</Text>
        </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'blue',
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
    },
});
