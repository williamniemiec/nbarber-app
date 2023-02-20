import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:config.colorAccent
    },
    inputArea:{
        width:'100%',
        padding:40
    },
    customButton:{
        height:60,
        backgroundColor:'#268596',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    },
    customButtonText:{
        fontSize:18,
        color:'white'
    }
});
