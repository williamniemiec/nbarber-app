import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   
    dateInfo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    dataPrevArea:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    dataNextArea:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    dateTitleArea:{
        width:140,
        justifyContent:'center',
        alignItems:'center',
        fontSize:17,
        fontWeight:'bold',
        color:'#111111',
        textAlign:'center'
    },

    dateList:{

    },
    dateBtn:{
        width:45,
        borderRadius:10,
        paddingTop:5,
        paddingBottom:5,
    },
    dateItem:{
        justifyContent:'center',
        alignItems:'center',
    },
    dateItemDisabled:{
        justifyContent:'center',
        alignItems:'center',
        opacity:0.5
    },
    dateItemWeekDay:{
        fontSize:16,
        fontWeight:'bold',
    },
    dateItemDay:{
        fontSize:16,
        fontWeight:'bold',
    },
    active:{
        backgroundColor:'#4eadbe',
        borderRadius:10,
        paddingVertical:5
    },
    activeText:{
        color:'white'
    }
});
