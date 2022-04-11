import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Topo from './componentes/topo';
import Detalhe from './componentes/detalhes';
import Livros from './componentes/roupas';

export default function Colecao({ topo, detalhes, roupa }){
    return <ScrollView>
            <Topo {...topo} />
            <View style={estilos.colecao}>
                <Detalhe {...detalhes}/>
                <Livros {...roupa}/>                
            </View>
        </ScrollView>;
}

const estilos = StyleSheet.create({
    colecao: {
        paddingVertical: 10, // padding de cima e de baixo
        paddingHorizontal: 16// padding da esquerda e da direita
    }
});