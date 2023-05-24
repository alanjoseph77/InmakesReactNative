import React,{Component} from "react";
import { View,StyleSheet,Text,} from "react-native";


export default class Profile extends Component{
    render()
    {
        return(
            <View style={styles.container}>

               <Text style={styles.profiletext}>this is profile page</Text>

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
    },profiletext:{
        fontSize:24,
        fontWeight:4,
        color:'#ffffff'
    }
})