import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    
    borderBottomColor: '#dee2e6', 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#343a40', 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#f8f9fa', 
    borderRadius: 20, 
    borderWidth: 1, 
    marginTop:20,
    borderColor: '#ced4da', 
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: '#495057', 
  },
  searchButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 5,
  },
  featuredImage: {
    width: '100%',
    height: 150,
  },
  swiperContainer: {
    height: 200,
  },
  swiper: {
    height: '100%',
  },
  swiperImage: {
    width: '100%',
    height: '100%',
  },
  newsContainer: {
    padding: 20,
    marginBottom:20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#343a40',
  },
  newsCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
    color: '#343a40', 
  },
  newsMeta: {
    fontSize: 14,
    color: '#868e96', 
    marginHorizontal: 10,
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
    textAlign:'justify',
    color: '#495057', 
  },
  readMoreButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 0, 
  },
  readMoreButtonText: {
    color: '#333', 
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#343a40', 
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    color: '#495057', 
  },
  modalCloseButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardSeparator: {
    height: 10,
    backgroundColor: '#f5f5f5',
  },
  additionalNewsBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  additionalNewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:'center',
    color: '#343a40',
  },
  additionalNewsDescription: {
    fontSize: 16,
    color: '#555',
    textAlign:'justify',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    zIndex: 999, 
  },
  });
  
  
  