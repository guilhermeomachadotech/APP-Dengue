import React from "react";
import { Text, Image, TouchableOpacity, SafeAreaView, View, ScrollView, Linking} from "react-native";
import {Ionicons}from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import styles from './style';

import imgGui from '../../img/devs/img-guilherme.jpeg';
import imgKauane from '../../img/devs/img-kauane.jpeg';
import imgRebecca from '../../img/devs/img-rebecca.jpeg';
import imgVitor from '../../img/devs/Vitor.jpeg';
import imgGitHub from '../../img/icons/github.png';
import imgInstagram from '../../img/icons/instagram.png';


export default function Devs({navigation}){
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
                <Ionicons name="people-sharp" size={24} color="black" />
                <Text style={styles.headerText}>Desenvolvedores</Text>
            </View>
            <ScrollView style={styles.scroll}>
                
                <View style={styles.cardDevs}>
                    <View style={styles.contImg}>
                        <Image source={imgGui} style={styles.imgFoto}></Image>
                    </View>
                    <View style={styles.contNome}>
                        <Text style={styles.txtNome}>Guilherme de Oliveira Machado</Text>
                    </View>
                    <View style={styles.contRedes}>
                        <TouchableOpacity style={styles.btnRedes}onPress={()=>Linking.openURL('mailto:machado.gui.oliveira@gmail.com') 
                        }>
                           <Fontisto name="email" size={50} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnRedes} onPress={()=>
                            Linking.openURL('https://www.instagram.com/guilhermedeomachado?igsh=bmZ4eXZwNXdtMTRv')
                        }>
                            <Image source={imgInstagram} style={styles.imgRedes}></Image>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={styles.cardDevs}>
                    <View style={styles.contImg}>
                        <Image source={imgKauane} style={styles.imgFoto}></Image>
                    </View>
                    <View style={styles.contNome}>
                        <Text style={styles.txtNome}>Kauane de Souza Brito</Text>
                    </View>
                    <View style={styles.contRedes}>
                        <TouchableOpacity style={styles.btnRedes} onPress={()=>
                            Linking.openURL('mailto:souzakauanebrito@gmail.com')
                        }>
                            <Fontisto name="email" size={50} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnRedes} onPress={()=> Linking.openURL('https://www.instagram.com/kauane.sk8/')
                        }>
                            <Image source={imgInstagram} style={styles.imgRedes}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cardDevs}>
                    <View style={styles.contImg}>
                        <Image source={imgRebecca} style={styles.imgFoto}></Image>
                    </View>
                    <View style={styles.contNome}>
                        <Text style={styles.txtNome}>Rebecca Manuela da Silva Cruz</Text>
                    </View>
                    <View style={styles.contRedes}>
                        <TouchableOpacity style={styles.btnRedes} onPress={()=>
                            Linking.openURL('mailto:rebeccasilva192006@gmail.com')
                        }>
                            <Fontisto name="email" size={50} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnRedes}onPress={()=>
                            Linking.openURL('https://www.instagram.com/rebecca192006?utm_source=qr&igsh=MWdma3BkZzdiMHFsYg==')
                        }>
                            <Image source={imgInstagram} style={styles.imgRedes}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cardDevs}>
                    <View style={styles.contImg}>
                        <Image source={imgVitor} style={styles.imgFoto}></Image>
                    </View>
                    <View style={styles.contNome}>
                        <Text style={styles.txtNome}>Vitor Pereira de Souza</Text>
                    </View>
                    <View style={styles.contRedes}>
                        <TouchableOpacity style={styles.btnRedes} onPress={()=>Linking.openURL('mailto:vpvitor777@gmail.com')}>
                            <Fontisto name="email" size={50} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnRedes} onPress={()=>
                            Linking.openURL('https://www.instagram.com/invites/contact/?i=ijbzghhy71sg&utm_content=3vlvte4')
                        }>
                            <Image source={imgInstagram} style={styles.imgRedes}></Image>
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