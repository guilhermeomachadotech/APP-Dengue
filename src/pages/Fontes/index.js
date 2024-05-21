import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Linking, Image} from "react-native";
import {Ionicons}from '@expo/vector-icons'
import styles from './style';

import imgMosquito from '../../img/icons/mosquito.png';
export default function Fontes({navigation}){
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
                <Ionicons name="information-circle" size={24} color="black" />
                <Text style={styles.headerText}>Fontes</Text>
            </View>
      
                <View style={styles.containerFontes}>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://mosquito.saude.es.gov.br/Not%C3%ADcia/dengue-e-transmitida-pela-femea-do-aedes-aegypti')}}>
                        <Text style={styles.creditsText}>https://mosquito.saude.es.gov.br/Not%C3%ADcia/dengue-e-transmitida-pela-femea-do-aedes-aegypti</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue')}}>
                        <Text style={styles.creditsText}>https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.dengue.pr.gov.br/Pagina/Dengue-Sintomas-e-Sinais')}}>
                        <Text style={styles.creditsText}>https://www.dengue.pr.gov.br/Pagina/Dengue-Sintomas-e-Sinais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Linking.openURL('https://www.saude.am.gov.br/ses-alerta-populacao-sobre-o-uso-de-medicamentos-contraindicados-em-casos-de-suspeita-de-dengue/')}>
                        <Text style={styles.creditsText}>https://www.saude.am.gov.br/ses-alerta-populacao-sobre-o-uso-de-medicamentos-contraindicados-em-casos-de-suspeita-de-dengue/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Linking.openURL('https://www.dengue.pr.gov.br/Pagina/Tratamento')}>
                        <Text style={styles.creditsText}>https://www.dengue.pr.gov.br/Pagina/Tratamento</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contImg}>
                    <Image source={imgMosquito} style={styles.imgMosquito}></Image>
                </View>

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