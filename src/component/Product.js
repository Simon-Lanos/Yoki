import React from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet, TouchableHighlight } from 'react-native';
import ProductModal from "./ProductModal";

export default class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opened: false,
            isLoading: true,
            product: {}
        };
    }

    openModal = () => {
        this.setState({
            opened: true
        });
    };

    closeModal = () => {
        this.setState({
            opened: false
        });
    };

    //https://fr.openfoodfacts.org/api/v0/produit/3029330003533.json
    getProduct = async () => {
        return fetch('https://fr.openfoodfacts.org/api/v0/produit/'+ this.props.self.data +'.json');
    };

    componentDidMount() {
        this.getProduct()
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    product: responseJson.product,
                    isLoading: false
                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {
        if(this.state.isLoading){
            return(
                <View style={style.container}>
                    <ActivityIndicator/>
                </View>
            )
        }
//
        return (
            <View>
                <TouchableHighlight onPress={this.openModal} style={style.container}>
                    <View style={style.column}>
                        <View>
                            <Image
                                style={{width: 50, height: 50}}
                                source={{uri: this.state.product.image_front_thumb_url}}
                            />
                        </View>
                        <View>
                            <Text style={style.productName}>{this.state.product.product_name}</Text>
                            <Text style={style.productInfo}>Scanné à {this.props.self.date.getHours()}h {this.props.self.date.getMinutes()}:{this.props.self.date.getSeconds()}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <ProductModal handleClose={this.closeModal} product={this.state.product} visible={this.state.opened}/>
            </View>
        );
  }
}

const style = StyleSheet.create({
    container: {
        margin: 10,
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    column: {
        flexDirection: 'column',
    },
    productName: {
        fontWeight: 'bold'
    },
    productInfo: {},
});
