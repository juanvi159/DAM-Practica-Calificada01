import { resolvePlugin } from '@babel/core';
import React, {Component} from 'react';
import {View,FlatList,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

//renderiza
function Item({title, image}) {
    return (
        <View style= {styles.item}>
            <Image source= {{uri: image}} style={{height: 40, width: 40}}/>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
export default class ConexionFetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
        };
    }
    async componentDidMount() {
        //await fetch('https://yts.mx/api/v2/list_movies.json')
        //await fetch('http://ddragon.leagueoflegends.com/cdn/11.7.1/data/es_MX/champion.json')
        await fetch('https://digimon-api.herokuapp.com/api/digimon')
        .then(res => res.json())
        .then(
            result => {
                console.warn('result', result);
                this.setState({
                    items: result,
                });
            },
            error => {
                this.setState({
                    error: error,
                });
            },
        );
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.items.length > 0 ? this.state.items:[]}
                    renderItem={({item}) => {
                        {console.log(item)}
                        return(
                            <TouchableOpacity onPress={() => navigate('DetallesDigimon', {info: item})}>
                                <Item title={item.name}  image={item.img} navigation={this.props.navigation}/>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.name}
                    navigation={this.props.navigation}
                />
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
        backgroundColor: '#fd7171',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection:'row',
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Arial, Helvetica, sans-serif',
    },
});