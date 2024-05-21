import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,

    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
    marginTop:10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop:10,
  },
  newsCard: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative', // Para posicionar o texto de direitos autorais abaixo da imagem
  },
  newsImage: {
    width: '100%',
    height: 200, // Ajuste a altura da imagem conforme necessário
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
  },
  overlayText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomTextContainer: {
    padding: 10,
    marginTop: 10, // Altura da imagem + margem superior
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  additionalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10, // Ajuste a margem superior conforme necessário
    marginBottom: 5,
  },
  additionalText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
    textAlign:'justify',
  },
  creditsTextTitulo:{
    fontSize:14,
    color:'black',
    marginBottom:10,
    fontWeight:'bold',
  },
  creditsText: {
    fontSize: 15,
    color: '#888',
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlign: 'justify',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
  },
});