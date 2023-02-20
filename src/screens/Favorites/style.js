import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor: '#63c2d1'
    },
    scroller:{
        flex: 1,
        paddingHorizontal: 20
    },
    loading:{
        marginTop: 30
    },
    listArea:{
        marginVertical: 20
    },
    warning: {
        color: 'white',
        textAlign:'center',
        fontSize:16,
        marginTop:50
    },
    headerArea:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 20,
        paddingHorizontal:40
    },
    headerTitle:{
        width:300,
        fontSize:24,
        fontWeight:'bold',
        color:'white',
    }
});
