import React,{Component} from "react";
import { View,StyleSheet,Text,} from "react-native";


export default class Status extends Component{
    render()
    {
        return(
            <View style={styles.container}>

                <Text style={styles.hometext}>this is status page</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        flex:1,
        alignItems:'center',
        backgroundColor:"green"
    },hometext:{
        fontSize:24,
        fontWeight:4,
        color:'#ffffff'
    }
})