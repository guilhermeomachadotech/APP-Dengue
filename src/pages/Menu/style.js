import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'white',
    },
    header:{
        flex:2,
        padding:10,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    contImg:{
        
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        width:300,
        height:300,
        resizeMode:'contain',
    },
    contTitulo:{

        justifyContent:'center',
        alignItems:'center',
    },
    txtTitulo:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        textTransform:'uppercase',
        textAlign:'center',
    },
    contButonn:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    button:{
        width:100,
        heigth:100,
        backgroundColor:'#343441',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    txtBtn:{
        fontSize:16,
        fontWeight:'bold',
        padding:10,
        color:'white',

    },
    
});