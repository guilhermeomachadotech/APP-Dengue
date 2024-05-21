import React, { useState, useEffect } from 'react';

import { Text, View, ScrollView, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

import newsImage1 from '../../img/Noticias/transmissao.jpg'; 
import newsImage2 from '../../img/Noticias/sintomas.jpg';
import newsImage3 from '../../img/Noticias/remedios.png';
import newsImage4 from '../../img/Noticias/tratamentoss.jpg'; 
import newsImage5 from '../../img/Noticias/medicamentos.jpg';


export default function Home({navigation}) {
    const [expandedNews, setExpandedNews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
    
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
    }, []);

    const handleReadMore = (index) => {
      setExpandedNews(index);
    };
  
    const handleCloseModal = () => {
      setExpandedNews(null);
    };
    
    function goHome() {
      navigation.navigate('Home');
    }
    function goDevs(){
        navigation.navigate('Devs');
    }
    function goFontes() {
        navigation.navigate('Fontes');
    }
    function goTransmissao() {
        navigation.navigate('Transmissao');
    }
    function goSintomas(){
      navigation.navigate('Sintomas');
    }
    function goTratamentos() {
      navigation.navigate('Tratamentos');
    }
    function goRiscos(){
      navigation.navigate('Automedicacao');
    }
    function goMedicamentos(){
      navigation.navigate('Medicamentos')
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Ionicons name="newspaper-outline" size={24} color="black" />
          <Text style={styles.headerText}>Dengue: A Doença</Text>
      </View>
     
      <ScrollView>
     
        <View style={styles.newsContainer}>
          <Text style={styles.sectionTitle}>Últimas Notícias</Text>
          <NewsCard 
            imageUri={newsImage1}
            title="Dengue - Uma ameaça persistente"
            description="Uma Ameaça Persistente. A dengue é transmitida por meio da picada da fêmea
            do mosquito Aedes aegypti infectada. "
            date="24 de março de 2024"
            author="Vitor Pereira"
            category="Saúde"
            onPress={() => goTransmissao()}
          />
          <View style={styles.cardSeparator} />
          <NewsCard 
            imageUri={newsImage2}
            title="Sintomas da Dengue"
            description="Dengue é uma doença tropical infecciosa causada pelo vírus da dengue, um arbovírus da família Flaviviridae, gênero Flavivírus e que inclui quatro tipos imunológicos"
            date="23 de março de 2024"
            author="Rebecca Manuella"
            category="Saúde"
            onPress={() => goSintomas()}
          />
          <View style={styles.additionalNewsBox}>
            <Text style={styles.additionalNewsTitle}>Dengue: o que é, sintomas, tratamento e prevenção</Text>
            <Text style={styles.additionalNewsDescription}>Em caso de suspeita de dengue, é recomendado consultar um infectologista ou clínico geral.</Text>
          </View>
          <Text style={styles.sectionTitle}>Notícias Populares</Text>
          <NewsCard 
            imageUri={newsImage3}
            title="Perigo da automedicação"
            description="A compreensão de que o vírus da dengue reduz a produção de plaquetas, essenciais para a coagulação, levou à advertência sobre o uso inadequado de salicilatos, como o ácido acetilsalicílico, que pode desencadear hemorragias graves."
            date="10 de março de 2024"
            author="Guilherme Machado"
            category="Saúde"
            onPress={() => goRiscos()}
          />
            <NewsCard 
            imageUri={newsImage4}
            title="Tratamento"
            description="Saiba como se cuidar em casa. Até o momento, não há um tratamento específico para a doença, sendo a hidratação adequada, ajustada conforme o peso do paciente, a principal abordagem."
            date="10 de março de 2024"
            author="Guilherme Machado"
            category="Saúde"
            onPress={() => goTratamentos()}
          />
          <View style={styles.additionalNewsBox}>
            <Text style={styles.additionalNewsTitle}>Diferença entre dengue, Zika e Chikungunya</Text>
            <Text style={styles.additionalNewsDescription}>Tanto a dengue, como a Zika e a Chikungunya são doenças virais transmitidas pelo mosquito Aedes aegypti, porém apresentam algumas diferenças entre os sintomas.</Text>
          </View>
          <NewsCard 
            imageUri={newsImage5}
            title="Medicamentos não indicados"
            description="Quando estamos infectados pelo vírus da dengue, devemos nos atentar em alguns medicamentos que podem piorar a situação."
            date="15 de março de 2024"
            author="Guilherme Machado"
            category="Saúde"
            onPress={() => goMedicamentos()}
          />
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
const NewsCard = ({ imageUri, title, description, date, author, category, onPress }) => {
  return (
    <TouchableOpacity style={styles.newsCard} onPress={onPress}>
      <Image source={imageUri} style={styles.newsImage} />
      <Text style={styles.newsTitle}>{title}</Text>
      <Text style={styles.newsMeta}>{category} | {author} | {date}</Text>
      <Text style={styles.newsDescription}>{description}</Text>
      <TouchableOpacity style={styles.readMoreButton} onPress={onPress}>
        <Text style={styles.readMoreButtonText}>Leia mais</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};