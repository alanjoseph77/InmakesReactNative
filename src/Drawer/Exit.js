import React,{Component} from "react";
import { View,StyleSheet,Text,TouchableHighlight,ImageBackground} from "react-native";


export default class Exit extends Component{
    render()
    {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/exit.jpg')}
                style={styles.imgbg}>

               <Text style={styles.Exittext}>CLICK  THE BUTTON FOR EXIT</Text>
               <TouchableHighlight style={styles.exitbtn}
               onPress={()=>this.props.navigation.navigate('Login')}>
                <Text>Logout</Text>
               </TouchableHighlight>
               </ImageBackground>

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
    },Exittext:{
        fontSize:24,
        fontWeight:4,
        color:'#ffffff'
    },
    exitbtn:{
        width:'60%'
            ,height:50
            ,marginTop:20,
            backgroundColor:'green',
            borderRadius:8,
            alignItems:'center',
            justifyContent:'center'
    },
    imgbg:{
        width:'100%',
        height:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})