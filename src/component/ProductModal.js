import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableHighlight} from 'react-native';
import {Constants} from 'expo';

export default class ProductModal extends React.Component {
    get novaStyle() {
        switch (this.props.product.nova_groups) {
            case 1:
                return style.color_1;
            case 2:
                return style.color_2;
            case 3:
                return style.color_3;
            case 4:
                return style.color_4;
            case 5:
                return style.color_5;
            default:
                break;
        }
    }

    get nutriStyle() {
        switch (this.props.product.nutrition_grade_fr) {
            case 'a':
                return style.color_1;
            case 'b':
                return style.color_2;
            case 'c':
                return style.color_3;
            case 'd':
                return style.color_4;
            case 'e':
                return style.color_5;
            default:
                break;
        }
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.visible}
                onRequestClose={() => {
                    this.props.handleClose()
                }}>
                <View style={{marginTop: 22}}>
                    <Text>Nom : {this.props.product.product_name}</Text>
                    <Text style={this.novaStyle}>Nova : {this.props.product.nova_groups}</Text>
                    <Text style={this.nutriStyle}>Nutri score : {this.props.product.nutrition_grade_fr}</Text>
                    <TouchableHighlight
                        onPress={() => {
                            this.props.handleClose()
                        }}>
                        <Text>Fermer</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        );
    }
}

const style = StyleSheet.create({
    color_1: {
        color: '#00ff00',
    },
    color_2: {
        color: '#88ff00',
    },
    color_3: {
        color: '#ffff00',
    },
    color_4: {
        color: '#ff8800',
    },
    color_5: {
        color: '#ff0000',
    },
});
