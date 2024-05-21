import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

import newsImage1 from '../../img/Noticias/sintomas.jpg'; 

export default function Sintomas({navigation}) {
  
  function goHome() {
    navigation.navigate('Home');
  }
  function goDevs(){
      navigation.navigate('Devs');
  }
  function goFontes() {
    navigation.navigate('Fontes');
}
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="newspaper-outline" size={24} color="black" />
          <Text style={styles.headerText}>Dengue: A Doença</Text>
      </View>
      <ScrollView>
        <View style={styles.newsCard}>
          <Image source={newsImage1} style={styles.newsImage} />
          <View style={styles.textContainer}>
            <Text style={styles.overlayText}>Sintomas</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.newsTitle}>Sintomas</Text>
            <Text style={styles.newsSubtitle}>Manifestações Clínicas e Indicadores Característicos</Text>
            <Text style={styles.additionalText}>Sinais e sintomas da dengue clássica. Febra alta. Dor cabeça. Dor retro-orbital (dor atrás dos olhos). Dor muscular. Dor nas articulações e ossos. Perda do apetite. Fraqueza e cansaço. Náuseas e vômitos. Rash de pele (manchas vermelhas). Sinais e sintomas da dengue clássica.</Text>
            <Text style={styles.creditsTextTitulo}>Fontes de Pesquisa:</Text>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.dengue.pr.gov.br/Pagina/Dengue-Sintomas-e-Sinais')}}>
              <Text style={styles.creditsText}>https://www.dengue.pr.gov.br/Pagina/Dengue-Sintomas-e-Sinais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.menu}>
        <TouchableOpacity onPress={()=>goHome()}>
          <Ionicons name="home-outline" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>goDevs()}>
          <Ionicons name="person-circle-outline" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>goFontes()}>
          <Ionicons name="information-circle-outline" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}