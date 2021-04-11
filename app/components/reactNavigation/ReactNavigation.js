import React, {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';


export default class DetallesDigimon extends Component {
    render() {
        const {params} = this.props.route;
        return ( 
            <View>
                <View  style={styles.item}>
                    <Text style={styles.title}>{params.info.name}</Text>
                    <View >
                        <Image source={{uri:params.info.img}} style={{borderRadius: 6, height: 200, width: 200, textAlignt: 'center'}} />
                    </View>
                    <Text style={styles.resumen}>Nivel del Digimon: {params.info.level}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    resumen: {
        fontSize: 20,
    },
});