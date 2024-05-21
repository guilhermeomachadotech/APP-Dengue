import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import styles from './style';

import icon_dengue from '../../img/logo-dengue.png';

export default function MenuScreen({navigation}) {
    function goHome() {
        navigation.navigate('Home');
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.contImg}>
                    <Image source={icon_dengue} style={styles.img}></Image>
                </View>
                <View style={styles.contTitulo}>
                    <Text style={styles.txtTitulo}>Dengue: A Doença</Text>
                </View>
            </View>
            
            <View style={styles.contButonn}>
                <TouchableOpacity style={styles.button} onPress={()=>goHome()}>
                    <Text style={styles.txtBtn}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}