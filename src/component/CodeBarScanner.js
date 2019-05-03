import React from 'react';
import {Modal, StyleSheet, Text} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class CodeBarScanner extends React.Component {
    state = {
        hasCameraPermission: null,
    };

    handleBarCodeScanned = ({ type, data }) => {
        this.props.onScan(type, data);
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.visible}
                onRequestClose={() => {
                    this.props.handleClose()
                }}>
                <BarCodeScanner
                    onBarCodeScanned={this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}
                />
            </Modal>
        );
    }
}
