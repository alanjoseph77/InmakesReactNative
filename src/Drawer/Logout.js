import React,{Component} from "react";
import { View,StyleSheet,Text,TouchableHighlight} from "react-native";


export default class Logout extends Component{
    render()
    {
        return(
            <View style={styles.container}>

                <Text style={styles.hometext}>CLICK HERE TO LOGOUT</Text>

                <TouchableHighlight>LOGOUT</TouchableHighlight>
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
        color:'yellow'
    }
})