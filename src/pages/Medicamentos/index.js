import React from "react";
import { Text, View, Linking, TouchableOpacity, Image, SafeAreaView , ScrollView} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";

import imgMedicamentos from '../../img/Noticias/medicamentos.jpg';
import acido from '../../img/medicamentos/acido.png';
import cetoprofeno from '../../img/medicamentos/cetoprofeno.png';
import dexametasona from '../../img/medicamentos/dexametasona.png';
import diclofenaco from '../../img/medicamentos/diclofenaco.png';
import ibuprofeno from '../../img/medicamentos/ibuprofeno.png';
import indometacina from '../../img/medicamentos/indometacina.png';
import naproxeno from '../../img/medicamentos/naproxeno.png';
import predsolona from '../../img/medicamentos/predsolona.png';
import veferina from '../../img/medicamentos/veferina.png';

export default function Medicamentos({navigation}){
    function goHome() {
        navigation.navigate('Home');
      }
      function goDevs(){
          navigation.navigate('Devs');
      }
      function goFontes() {
        navigation.navigate('Fontes');
    }
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Ionicons name="newspaper-outline" size={24} color="black" />
            <Text style={styles.headerText}>Dengue: A Doença</Text>
        </View>
      <ScrollView>
        <View style={styles.newsCard}>
          <Image source={imgMedicamentos} style={styles.newsImage} />
          <View style={styles.textContainer}>
            <Text style={styles.overlayText}>Medicamentos</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.newsTitle}>Medicamentos Não Indicados em Caso de Dengue</Text>
            <Text style={styles.newsSubtitle}>Lista de Medicamentos Não Indicados</Text>
            <Text style={styles.additionalText}>A Automedicação em caso de dengue é prejudicial para o diagnóstico, principalmente aqueles medicamentos que não são indicados em suspeita de Dengue. Eles podem ampliar ou mascarar os sintomas, além de aumentar os risco de hemorragias como citados na matéria "Périgos da Automedicação"</Text>
            <Text style={styles.additionalText}>Os principais tipos de medicamentos que não podemos tomar são os anti-inflamatórios, corticoides, antibióticos e de base de salicilatos. </Text>
            
            <View style={styles.contTituloExemplos}>
                <Text style={styles.txtExemplos}>Exemplos</Text>
            </View>
            <View style={styles.contListMedicamentos}>
                <Image source={ibuprofeno} style={styles.imgMedicamentos}></Image>
                <Text style={styles.txtMedicamentos}>Ibuprofeno</Text>
            </View>
            <View style={styles.contListMedicamentos}>
                <Image source={naproxeno} style={styles.imgMedicamentos}></Image>
                <Text style={styles.txtMedicamentos}>Naproxeno</Text>
            </View>
            <View style={styles.contListMedicamentos}>
                <Image source={veferina} style={styles.imgMedicamentos}></Image>
                <Text style={styles.txtMedicamentos}>Varfarina</Text>
            </View>
            <View style={styles.contListMedicamentos}>
                <Image source={cetoprofeno} style={styles.imgMedicamentos}></Image>
                <Text style={styles.txtMedicamentos}>Cetoprofeno</Text>
            </View>
            <View style={styles.contListMedicamentos}>
                <Image source={indometacina} style={styles.imgMedicamentos}></Image>
                <Text style={styles.txtMedicamentos}>Indometacina</Text>
            </View>
            <View style={styles.contListMedicamentos}>
                <Image source={dexametasona} style={styles.imgMedicamentos}></Image>
                <Text style={styles.txtMedicamentos}>Dexametasona</Text>
            </View>
            <View style={styles.contListMedicamentos}>
                <Image source={diclofenaco} style={styles.imgMedicamentos}></Image>
                <Text style={styles.txtMedicamentos}>Diclofenaco</Text>
            </View>
            <View style={styles.contListMedicamentos}>
                <Image source={predsolona} style={styles.imgMedicamentos}></Image>
                <Text style={styles.txtMedicamentos}>Prednisolona</Text>
            </View>
            <View style={styles.contListMedicamentos}>
                <Image source={acido} style={styles.imgMedicamentos}></Image>
                <Text style={styles.txtMedicamentos}>Ácido Acetilsalicílico</Text>
            </View>
            <Text style={styles.creditsTextTitulo}>Fontes de Pesquisa:</Text>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://alagoas.al.gov.br/noticia/sesau-alerta-para-medicamentos-contraindicados-em-caso-de-dengue')}}>
              <Text style={styles.creditsText}>https://alagoas.al.gov.br/noticia/sesau-alerta-para-medicamentos-contraindicados-em-caso-de-dengue
            </Text>
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