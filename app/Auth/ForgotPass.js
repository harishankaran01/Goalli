import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React,{useContext, useState} from 'react';
import { useRouter } from 'expo-router';
import { hp, wp } from '../../theme/common';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import  {theme}  from "../../theme/color"
import Toast from 'react-native-toast-message'
export default function ForgotPass() {
  const router = useRouter();
  const [email,setEmail]=useState("");
  const showToast = (message) => {
    Toast.show({
        type: "success",
        position: "bottom",
        text1: message,
    });
}
const toastConfig = {
    success: ({ text1, props, ...rest }) => {
        return (
            <View style={styles.toast}>
                <Text style={styles.toastText}>{text1}</Text>
            </View>
        )
    }

}
const sendEmail=(() => {
  console.log(email);
  if(email.length> 0) {
    showToast("Email sent");
    return;
  }
  showToast("Enter the email address");
  // setTimeout(() => router.back(), 1500);
 })
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <View style={styles.bgimageContainer}>
        {/* <Image 
          source={require("../../assets/logo_plain.png")}  style={styles.bgimage}
          resizeMode='contain'
        /> */}
      </View>
      <View>
        <Animated.Text entering={FadeInDown.delay(100).duration(200).damping(11)} style={styles.header}>Forgot Password ?</Animated.Text>
      </View>
      <Animated.View entering={FadeInDown.delay(200).duration(200)}  style={styles.signupContainer}>
        <Text style={styles.description}>Please enter Your email ID for verfication process. We will send a password reset link on your registered emial ID. Please check your email to continue reset your password  </Text>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(300).duration(200)}   style={styles.inputContainer}>
        <TextInput placeholder="Email ID" style={styles.input} value={email} onChangeText={setEmail} />
        <Feather name='mail' size={24} color="black"/>
      </Animated.View>
    
      <Animated.View entering={FadeInDown.delay(600).duration(200)}>
      <TouchableOpacity style={styles.loginButton} onPress={() => sendEmail()}>
        <Text style={styles.loginButtonText}>Send reset Link</Text>
      </TouchableOpacity>
      </Animated.View>
      <Toast config={toastConfig} visibilityTime={2500} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 10,
    alignItems:"center",
    // justifyContent:"center",
  },
  bgimageContainer:{
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  bgimage: {
    width: "100%",
    height: "100%",
  },
  description:{
    // width:wp(79),
    textAlign:"justify",
    fontSize: 14,
    paddingHorizontal:30
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    marginTop:10
   
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  link: {
    marginLeft: 5,
  },
  linkText: {
    color: theme.colors.secondary,
    textDecorationLine:"underline",
    fontWeight:"500"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor:"#FFFFFF",
    borderRadius: 10,
    height: hp(7),
    paddingLeft:20,
    width:wp(80),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    fontSize:16,
    paddingRight: 10,
  },
  loginButton: {
    backgroundColor: theme.colors.third,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
    width:wp(80),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  toastText: {
    fontSize: hp(1.8),
    color: "black",
    fontWeight: theme.fontWeights.medium,
    textAlign: "center"

},
toast: {
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: theme.radius.xl,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
}
});