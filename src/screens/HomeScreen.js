import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {Constants} from 'expo';
import Product from "../component/Product";
import ScanButton from "../component/ScanButton";
import Header from "../component/Header";
import CodeBarScanner from "../component/CodeBarScanner";

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scanVisible: false,
            productList: [],
        }
    }

    openScan = () => {
        this.setState({
            scanVisible: true,
        });
    };

    closeScan = () => {
        this.setState({
            scanVisible: false,
        });
    };

    handleScan = (type, data) => {
        if (type === 32) {
            this.setState({
                scanVisible: false,
                productList: [...this.state.productList, {type: type, data: data, date: new Date()}]
            });
        }
    };

  render() {
    return (
        <View>
            <View style={style.statusBar}/>
            <Header/>
            <ScanButton handlePress={this.openScan}/>
            <CodeBarScanner visible={this.state.scanVisible} onScan={this.handleScan} handleClose={this.closeScan}/>
            <FlatList
                inverted
                data={this.state.productList}
                renderItem={({index, item}) => <Product key={index} self={item}/>}
            />
        </View>
    );
  }
}

const style = StyleSheet.create({
    statusBar: {
        backgroundColor: 'white',
        height: Constants.statusBarHeight,
    },
    listContainer: {
        flex: 1,
    }
});
