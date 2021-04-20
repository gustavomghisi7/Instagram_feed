import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Lista from './src/Lista';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            feed: [
               {
                   id: '1',
                   nome: 'lucas_silva',
                   descricao: 'Mais um dia de muitos bugs :)',
                   imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                   imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
                   likeada: false,
                   likers: 0
               },
               {
                    id: '2',
                    nome: 'rosamath',
                    descricao: 'Isso sim é ser raiz!!',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
                    likeada: false,
                    likers: 45
                },
                {
                    id: '3',
                    nome: 'zeaugusto17',
                    descricao: 'Bora trabalhar hehe',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
                    likeada: false,
                    likers: 76
                },
                {
                    id: '4',
                    nome: 'gustavo_henrique',
                    descricao: 'Isso sim que é T.I',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
                    likeada: true,
                    likers: 45
                },
                {
                    id: '5',
                    nome: 'gui_martins',
                    descricao: 'Isso sim que é T.I',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
                    likeada: false,
                    likers: 34
                }, 
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <View style={styles.headerLeft}>
                            <Image 
                                source={require('./src/img/logo.png')}
                                style={styles.logo}
                            />
                        </View>
                    </TouchableOpacity>

                    
                    <View style={styles.headerRight}>
                        <TouchableOpacity>
                            <Image 
                                source={require('./src/img/mais.png')}
                                style={styles.mais}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require('./src/img/messenger.png')}
                                style={styles.messenger}
                            />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={this.state.feed}
                    renderItem={ ({item}) => <Lista data={item} /> }
                />   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 1,
    },
    headerLeft: {
        padding: 12,
    },
    headerRight:{
        flexDirection: 'row',
        padding: 22,
    },
    logo:{
        width: 110,
        height: 40,
    },
    mais:{
        marginRight: 22,
        width: 22,
        height: 22,
    },
    messenger: {
        width: 22,
        height: 24,
    }
});

export default App;