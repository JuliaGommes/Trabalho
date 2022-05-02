import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Topo from './componentes/topo';
import Detalhe from './componentes/detalhes';
import Roupa from './componentes/roupas';
import Texto from '../../componentes/Texto';

export default function Colecao({ topo, detalhes, roupas }) {
    return <>
        <FlatList
            data={roupas.lista}
            renderItem={Roupa}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.colecao}>
                        <Detalhe {...detalhes} />
                        <Texto style={estilos.titulo}>{ roupas.titulo }</Texto>
                    </View>
                </>
            }} />

    </>;
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        fontFamily: 'WaterBrush-Regular',
        lineHeight: 32
    },
    colecao: {
        paddingVertical: 10, // padding de cima e de baixo
        paddingHorizontal: 16,// padding da esquerda e da direita
        fontFamily: 'WaterBrush-Regular',
    }
});