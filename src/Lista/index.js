import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        };
    }


    render(){
        return(
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image
                        source={{uri: this.state.feed.imgPerfil}}
                        style={styles.fotoPerfil}
                    />
                    <Text 
                        style={styles.nomeUsuario}> {this.state.feed.nome}
                    </Text>
                </View>
                
                <Image
                    resizeMode="cover"
                    style={styles.fotoPublicacao}
                    source={{uri: this.state.feed.imgPublicacao}}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity>
                        <Image
                            source={require('../img/like.png')}
                            styles={styles.iconelike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../img/send.png')}
                            styles={styles.iconelike}
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    nomeUsuario:{
        fontSize: 22,
        textAlign: 'left',
        color: '#000000'
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fotoPublicacao:{
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    }
});

export default Lista;