import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    tabArea:{
        height:60,
        backgroundColor:'#4EADBE',
        flexDirection:'row'
    },
    tabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabItemCenter:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'#4eadbe',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginTop:-20
    },
    avatar:{
        width:24,
        height:24,
        borderRadius:12
    }
});
