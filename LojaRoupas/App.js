import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import Colecao from './src/telas/colecao/index';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import colecao from './src/mocks/colecao';
//import AppLoading from 'expo-app-loading';

export default function App() {
 
   return <SafeAreaView style={styles.container}>
          <Colecao {...colecao} />
          <StatusBar />
         </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});