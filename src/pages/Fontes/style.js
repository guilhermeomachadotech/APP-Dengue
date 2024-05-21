import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
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
    containerFontes:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        margin:20,
    },
    creditsText: {
        fontSize: 15,
        color: '#888',
        paddingHorizontal: 10,
        marginBottom: 10,
        textAlign: 'justify',
    },
    contImg:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imgMosquito:{
        width:300,
        resizeMode:'contain',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#f8f9fa',
        borderTopWidth: 1,
        borderTopColor: '#dee2e6',
      },
    categoryIcon:{
        marginHorizontal:15,
    },
    
})