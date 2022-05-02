import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Texto from '../../../componentes/Texto'

export default function detalhes({ nome, fornecedor, descricao, preco, logo, botao }) {
    const loggando = () => alert('Todas as Roupas Compradas!');//console.log('Clicou...');
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.cabecalhoFornecedor}>
            <Image source={logo} style={estilos.imagemFornecedor} />
            <Texto style={estilos.fornecedor}>{ fornecedor }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>
        <TouchableOpacity style={ estilos.botao } onPress={loggando}>
            <Texto style={ estilos.textoBotao }>{ botao }</Texto>
        </TouchableOpacity>
    </>;
}
const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#000000",
        paddingVertical: 16, // espaço em cima e embaixo
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 36,
        fontFamily: 'righteous',
        fontWeight: "bold"
    },
    fornecedor: {
        fontSize: 16,
        lineHeight: 36,
        fontFamily: 'righteous',
        marginLeft: 12,
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        fontFamily: 'righteous',
    },
    imagemFornecedor: {
        width: 50,
        height: 50
    },
    cabecalhoFornecedor: {
        flexDirection: 'row',// tudo em uma linha
        paddingVertical: 12
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 42,
        marginTop: 8
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    },
});