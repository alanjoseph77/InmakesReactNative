import React,{Component} from "react";
import { View,StyleSheet,Text,} from "react-native";


export default class AboutUs extends Component{
    render()
    {
        return(
            <View style={styles.container}>

               <Text style={styles.abouttext}>this is AboutUs page</Text>

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
        backgroundColor:"blue"
    },abouttext:{
        fontSize:24,
        fontWeight:4,
        color:'#ffffff'
    }
})