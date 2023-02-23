import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    area:{
        backgroundColor:'#ffffff',
        marginBottom:20,
        borderRadius:20,
        padding:15,
        flexDirection:'row'
    },
    avatar:{
        width:88,
        height:88,
        borderRadius:20
    },
    infoArea:{
        marginLeft:20,
        justifyContent:'space-between'
    },
    userName:{
        fontSize:17,
        fontWeight:'bold'
    },
    seeProfileButton:{
        width:85,
        height:26,
        borderWidth:1,
        borderColor:'#4eadbe',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    seeProfileButtonText:{
        fontSize:13,
        color:'#268596'
    }
});