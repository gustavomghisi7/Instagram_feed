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
                        source={{uri: this.state.feed.imgperfil}}
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
                    <TouchableOpacity style={styles.espacamento1}>
                        <Image
                            source={require('../img/like.png')}
                            style={styles.iconelike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.espacamento2}>
                        <Image
                            source={require('../img/comment.png')}
                            style={styles.iconecomment}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.espacamento2}>
                        <Image
                            source={require('../img/send.png')}
                            style={styles.iconesend}
                        />
                    </TouchableOpacity>      
                </View>

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    nomeUsuario:{
        fontSize: 16,
        textAlign: 'left',
        color: '#000000',
        paddingLeft: 5,
    },
    fotoPerfil:{
        width: 35,
        height: 35,
        borderRadius: 25,
    },
    fotoPublicacao:{
        flex: 1,
        height: 450,
        alignItems: 'center',
    },
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    areaBtn:{
       flexDirection: 'row',
       padding: 5,
    },
    iconelike:{
        width: 22,
        height: 22,
    },
    iconecomment:{
        width: 22,
        height: 22,
    },
    iconesend:{
        width: 22,
        height: 20,
    },
    espacamento1:{
        paddingLeft: 12,
        paddingTop: 10,
    },
    espacamento2:{
        paddingTop: 10,
        paddingLeft: 15,
    },
    viewRodape:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 10,
    },
    descRodape:{
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    nomeRodape:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 7
    }
});

export default Lista;