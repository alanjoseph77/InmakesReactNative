import React,{Component} from "react";
import { View,Text,StyleSheet,Image } from "react-native";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profileView}>
                    <View style={styles.profileicon}>
                        <Image style={styles.profileImg}
                         source={require('../../assets/icon.png')}></Image>
                         <Text style={styles.InviteText}>INVITE</Text>
                    </View>
                    <View><Text style={styles.FavazText}>Favaz</Text>
                    <Text style={styles.goldText}>gold</Text>

                    
                    <Text style={styles.coinText}>TotalCoin</Text>
                    <Text style={styles.coinText1}>coin:20000</Text>
                    
                        
                    
                    
                    </View>
                    
                
                </View>
                
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                <Text style={styles.menu} 
                onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style={styles.menu} 
                onPress={()=>this.props.navigation.navigate('Settings')}>Settings</Text>
                <Text style={styles.menu} 
                onPress={()=>this.props.navigation.navigate('AboutUs')}>AboutUs</Text>
                <Text style={styles.logoutmenu}
                onPress={()=>this.props.navigation.navigate('Exit')}>Logout</Text>

                
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:'#ffffff'

    },
    menu:{
        fontSize:18,
        marginTop:30,
        marginLeft:10,
        color:"#369",
        fontWeight:'bold'
    },profileView:{
        height:"25%",
        width:'100%',
        backgroundColor:"black",
        flexDirection:"row",
        
    },
    profileicon:{
        height:80,
        width:80,
        backgroundColor:"#bbbbbb",
        borderRadius:40,
        marginTop:40,
        


    },profileImg:{
        width:'100%',
        height:"100%",
        borderRadius:50
    },
    FavazText:{
        color:'white',
        marginLeft:189,
        marginTop:50,
        fontWeight:'bold'
        

    }
    ,
    goldText:{
        color:'white',
        backgroundColor:'grey',
        marginLeft:180,
        paddingLeft:10
        
        

    },
    coinText1:{
        color:'white',
        
        marginLeft:170,
        
        
        

    },
    coinText:{
        color:'white',
        marginLeft:180,
        marginTop:50,
        
        

    },
    InviteText:{
        color:'black',
        backgroundColor:'white',
        paddingLeft:20
        ,marginTop:40
        
    
        
        

    },
    
    logoutmenu:{
        fontSize:18,
        marginTop:30,
        marginLeft:80,
        color:"#369",
        alignItems:'center',
        justifyContent:'center'
    }
})