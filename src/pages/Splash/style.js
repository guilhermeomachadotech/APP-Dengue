import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'white',
    },
    contImg:{
        flex:1,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    },
    imgIcon:{
        width:240,
        height:240,
        resizeMode:'contain'
    },
    contLoad:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    load:{
        fontSize:400,
    },
})