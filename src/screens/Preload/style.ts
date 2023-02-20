import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:config.colorAccent
    },
    activityIndicator:{
        marginTop:50
    }
});
