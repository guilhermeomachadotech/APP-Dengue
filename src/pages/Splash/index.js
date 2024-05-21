import React from 'react-native';
import { ActivityIndicator, Image, View, SafeAreaView } from 'react-native';
import styles from './style';

import LogoDengue from '../../img/dengue.webp';

export default function SplashScreen({navigation}) {
    setTimeout(()=>{
        navigation.navigate("Menu");
    },3000);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contImg}>
                <Image source={LogoDengue} style={styles.imgIcon}></Image>
            </View>
            <View style={styles.contLoad}>
                <ActivityIndicator size={'large'} color={'black'} style={styles.load}></ActivityIndicator>
            </View>
        </SafeAreaView>
    );
}