import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class ScanButton extends React.Component {
  render() {
    return (
        <View style={style.container}>
            <Button
                onPress={this.props.handlePress}
                style={style.button}
                title="Tail"
                color="#841584"
            />
        </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'lime',
    },
    button: {
        height: 100,
        textAlign: 'center',
    },
});
