import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity,  Linking ,SafeAreaView ,TextInput } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from './style';

import newsImage1 from '../../img/Noticias/transmissao.jpg';

export default function Transmissao({navigation}) {
  
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
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="newspaper-outline" size={24} color="black" />
          <Text style={styles.headerText}>Dengue: A Doença</Text>
      </View>
      <ScrollView>
      <View style={styles.newsCard}>
          <Image source={newsImage1} style={styles.newsImage} />
          <View style={styles.textContainer}>
            <Text style={styles.overlayText}>Transmissão</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.newsTitle}>Transmissão do Vírus</Text>
            <Text style={styles.newsSubtitle}>Como o vírus percorre</Text>
            <Text style={styles.additionalText}>A dengue é transmitida por meio da picada da fêmea do mosquito Aedes aegypti infectada.</Text>
            <Text style={styles.additionalText}>O ciclo de trasmissão ocorre da seguinte maneira: a fêmea do msoquito deposita seus ovos em recipientes com água. Ao saírem dos ovos, as larvas vivem na água por cerca de uma semana. Após esse período, transformam-se</Text>
            <Text style={styles.creditsTextTitulo}>Fontes de Pesquisa:</Text>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://mosquito.saude.es.gov.br/Not%C3%ADcia/dengue-e-transmitida-pela-femea-do-aedes-aegypti')}}>
              <Text style={styles.creditsText}>https://mosquito.saude.es.gov.br/Not%C3%ADcia/dengue-e-transmitida-pela-femea-do-aedes-aegypti</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue')}}>
              <Text style={styles.creditsText}>https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue</Text>
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
    </SafeAreaView>
  );
}