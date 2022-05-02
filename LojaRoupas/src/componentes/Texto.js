import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {
    useFonts,Lobster_400Regular
} from '@expo-google-fonts/righteous'

export default function Texto({ children, style }) {
    // para usar negrito
    let estilo = estilos.texto;
    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }
    return <Text style={ [style, estilo] }>{ children }</Text>;
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'WaterBrush-Regular',
        fontWeight: 'normal'
    },
    textoNegrito: {
        fontFamily: 'WaterBrush-Regular',
        fontWeight: 'normal'
    }
});