import React,{Component} from "react";
import { View,StyleSheet,Text,FlatList,TextInput} from "react-native";
import { SearchBar } from "@rneui/themed";



export default class SearchBar extends Component{
    // state = {
    //     search: '',
    //   };
    
    
    render()
    {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputview}
                        placeholder="SEARCH HERE"
                        placeholderTextColor='green'
                        secureTextEntry={true}></TextInput>

                <Text style={styles.serchtext}>this is Search page</Text>
                
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
    },serchtext:{
        fontSize:24,
        fontWeight:4,
        color:'#ffffff'
    },
    inputview:{
        height:55,
        width:'100%'
        
        ,borderWidth:1,
        borderColor:'green',
        marginTop:20,
        paddingLeft:20
        
    },
    buttonView:{
        width:'60%'
        ,height:50
        ,marginTop:20,
        backgroundColor:'green',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
})