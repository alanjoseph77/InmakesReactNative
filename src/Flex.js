import React,{Component} from "react";
import { View ,StyleSheet,Text, TouchableHighlight




} from "react-native";


class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text>Hi my name is{this.props.name}</Text>
            </View>
        )
    }
}

export default class Flex extends Component{

    constructor(){
        super();
        this.state=
        {
            main_text:'hi',
            sub_text:'hlo'
        }
    }

    componentDidMount()

    {
        console.log('the user name is',this.props.route.params.username)
    }

    updateText(){
        this.setState({
            main_text:"hi(hello updated)",
            sub_text:'hlo(update)'
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Text}>{this.state.main_text}</Text>
                <Text style={styles.Text}>{this.state.sub_text}</Text>
                <TouchableHighlight style={styles.button}
                onPress={()=>this.updateText()}
                underlayColor='transparent'>
                    <Text style={styles.Text}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                onPress={()=>this.props.navigation.navigate('Drawer')}>
                    <Text style={styles.Text}>CLICK HERE</Text>
                </TouchableHighlight>
                <FlexContent name={this.props.route.params.username}></FlexContent>
                

            </View>

        )

    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
        ,alignItems:'center',
        justifyContent:"center",
    },
    button:{
        width:'60%'
            ,height:50
            ,marginTop:20,
            backgroundColor:'green',
            borderRadius:8,
            alignItems:'center',
            justifyContent:'center'
    },
    Text:{
        fontWeight:'bold',
        color:"white",
        flexDirection:'row'}


})