import React, {Component}from "react";
import{
    View,Text,ImageBackground,Image,StyleSheet,TextInput,TouchableHighlight,TouchableOpacity
} from "react-native"


export default class Signup extends Component{


    

    constructor(){
        super();
        this.state={
            check:false,
            email:''
        }
        this.validates = this.validates.bind(this);
    }
    CheckBoxText(){
        this.setState({
          check:!this.state.check,
        })
    }

    validates=()=>{
        let text = this.state.email; 
    let emailError = this.state.emails;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false) 
    { 
    console.warn("Invalid email")
    this.setState({email:text}) 
    return false; 
    } 
    else { 
    this.setState({email:text}) 
    console.log("Email is Correct"); 
    } 
} 



    
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/signupbg.jpg')} style={styles.bgimg}>
                    <Image source={require('../assets/favicon.png')} style={styles.logo}>

                    </Image>

                    <Text style={styles.text1}>SIGN UP</Text>

                    <TextInput style={styles.submitButton}
                    placeholder='username'
                    maxLength={10}
                    ></TextInput>
                    <TextInput onChangeText={(text) => this.setState({email:text})} 
            type='email'
            value={this.state.email} 
            keyboardType='email-address'
            style={styles.submitButton}
            placeholder={'Input Email Address'}
            underlineColorAndroid='transparent' 
                    
                    
                
                    ></TextInput>


                    <TextInput style={styles.submitButton}
                    placeholder='code' 
                    maxLength={10}></TextInput>


                    <TextInput style={styles.submitButton}
                    placeholder="mobile"></TextInput>


                    <TextInput style={styles.submitButton}
                    placeholder='password'
                    secureTextEntry={true}></TextInput>



{/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>  */}
      <TouchableOpacity  onPress={this.validates}style={styles.loginBtn}>
        <Text  style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>



                </ImageBackground>
                
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
    height:'100%',
        width:'100%',
        backgroundColor:'black'
    },
     bgimg:{
        height:'100%',
            width:'100%',
            alignItems:"center",
            justifyContent:'center'
    },
    logo:{
        height:90,
        width:80,
    },
    text1:{
        fontWeight:'bold',
        fontSize:20,
        marginTop:20,
        marginBottom:20,
        color:'red'
    },

    text2:{
        fontWeight:'bold',
        fontSize:20,
        marginTop:20,
        borderWidth:2,
        width:'60%'
        
    },
    submitButton: {
         backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent:'center',

     },
     
  forgot_button: {
    height: 30,
    marginBottom: 10,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#FF1493",
  },
        
       
})
