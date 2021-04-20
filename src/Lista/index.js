import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.carregaIcone = this.carregaIcone.bind(this);
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
    }
    carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png');
    }

    like(){
        let feed = this.state.feed;

        if(feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada:false,
                    likers: feed.likers - 1
                }
            });
        } else {
            this.setState({
                feed:{
                    ...feed,
                    likeada:true,
                    likers: feed.likers + 1
                }
            });
        }
    }

    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0) {
            return;
        }

        return(
            <View style={styles.curtidas}>
                <Text style={styles.curtido}>
                    Curtida por
                </Text>
                <Text style={styles.likes}>
                    {feed.likers}
                </Text>
                <Text style={styles.likes}>
                    {feed.likers > 1 ? 'pessoas' : 'pessoa'}
                </Text>
            </View>

        );
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
                    <TouchableOpacity style={styles.espacamento1} onPress={this.like}>
                        <Image
                            source={this.carregaIcone(this.state.feed.likeada)}
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
                    <TouchableOpacity style={styles.espacamento3}>
                        <Image
                            source={require('../img/saved.png')}
                            style={styles.iconesaved}
                        />
                    </TouchableOpacity>      
                </View>

                {this.mostraLikes(this.state.feed.likers)}

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
        paddingLeft: 3,
    },
    fotoPerfil:{
        width: 28,
        height: 28,
        borderRadius: 25,
    },
    fotoPublicacao:{
        flex: 1,
        height: 470,
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
        width: 26,
        height: 26,
    },
    iconecomment:{
        width: 22,
        height: 22,
    },
    iconesend:{
        width: 22,
        height: 20,
    },
    iconesaved:{
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
    espacamento3:{
        paddingTop: 10,
        paddingLeft: 255,
    },
    viewRodape:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 10,
    },
    descRodape:{
        paddingLeft: 5,
        fontSize: 14,
        color: '#000',
    },
    nomeRodape:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 10,
    },
    curtidas:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 4,
    },
    curtido:{
        fontSize: 14,
        marginLeft: 10,
        paddingTop: 4,
    },
    likes:{
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 4,
        paddingTop: 4,
    },
});

export default Lista;