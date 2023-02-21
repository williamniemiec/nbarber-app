import { StyleSheet } from 'react-native';
import Theme from '../../assets/themes';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Theme.colorAccent
    },
    activityIndicator:{
        marginTop:50
    }
});
