import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

import newsImage1 from '../../img/Noticias/remedios.png'; 

export default function Automedicacao({navigation}) {

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
            <Text style={styles.overlayText}>Automedicação</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.newsTitle}>Riscos Associados à Automedicação</Text>
            <Text style={styles.newsSubtitle}>Quais medicamentos não podemos tomar?</Text>
            <Text style={styles.additionalText}>As características do Aedes aegypti, vetor da dengue, e os sintomas da dengue clássica, como febre alta, cefaleia, mialgia, prostração, artralgia, anorexia, dor retro-orbital, náuseas, vômitos, exantema e prurido cutâneo, eram conhecidos.</Text>
            <Text style={styles.additionalText}>Diante da possibilidade de sintomas semelhantes em outras doenças, orientou-se a busca por assistência médica ao identificar qualquer um deles.A compreensão de que o vírus da dengue reduz a produção de plaquetas, essenciais para a coagulação, levou à advertência sobre o uso inadequado de salicilatos, como o ácido acetilsalicílico, que pode desencadear hemorragias graves.</Text>
            <Text style={styles.additionalText}>Destacou-se a importância de abordar os sintomas da dengue com medidas não farmacológicas, como repouso e ingestão de líquidos. </Text>
            <Text style={styles.creditsTextTitulo}>Fontes de Pesquisa:</Text>
            <TouchableOpacity onPress={()=>Linking.openURL('https://www.saude.am.gov.br/ses-alerta-populacao-sobre-o-uso-de-medicamentos-contraindicados-em-casos-de-suspeita-de-dengue/')}>
              <Text style={styles.creditsText}>https://www.saude.am.gov.br/ses-alerta-populacao-sobre-o-uso-de-medicamentos-contraindicados-em-casos-de-suspeita-de-dengue/</Text>
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