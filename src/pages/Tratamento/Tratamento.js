import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput , Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

import newsImage1 from '../../img/Noticias/mosquito.jpg'; 

export default function Tratamento({navigation}) {

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
            <Text style={styles.overlayText}>Tratamento</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.newsTitle}>Saiba como se cuidar</Text>
            <Text style={styles.additionalText}>Atualmente, não existe tratamentos especificos para o vírus, porém existe algumas recomendações médicas quando ocorre esses casos de infecção. Entre eles estão: ingestão de líquidos, repouso imediato, fazer a hidratação regularmente, não se automedicar, ir para o médico para ter um tratamento personalizado e sempre fazer o retorno para o auxílio médico</Text>
            <Text style={styles.creditsTextTitulo}>Fontes de Pesquisa:</Text>
            <TouchableOpacity onPress={()=>Linking.openURL('https://www.dengue.pr.gov.br/Pagina/Tratamento')}>
              <Text style={styles.creditsText}>https://www.dengue.pr.gov.br/Pagina/Tratamento</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL('https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue')}>
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
    </View>
  );
}
