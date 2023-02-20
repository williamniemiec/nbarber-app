import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#63c2d1'
    },
    searchArea:{
        backgroundColor: '#4eadbe',
        height:40,
        borderRadius:20,
        paddingVertical:0,
        paddingHorizontal:20,
        margin: 20
    },
    searchText:{
        flex: 1,
        fontSize: 16,
        color: '#ffffff'
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
    }
});
