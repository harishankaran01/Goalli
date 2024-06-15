import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React,{useContext, useState} from 'react';
import { useRouter } from 'expo-router';
import { hp, wp } from '../../theme/common';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import  {theme}  from "../../theme/color"
import { AuthContext } from '../Context/AuthContext';
import Toast from 'react-native-toast-message'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
export default function Login() {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 30 ? top + 10 : 30;
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const {userToken,LogIn,LogOut,isLoading}=useContext(AuthContext);
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    console.log(userToken);
  };
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
  const LogInRequest=() => {
    console.log(userName, password);
    if(userName===""||password===""){
      showToast("Please fill all the fields");
    }
    else{
      LogIn(userName);
    }
  }

  return (
    <View style={[styles.container,paddingTop]}>
      <StatusBar style='dark' />
      <View style={styles.bgimageContainer}>
        <Image 
          source={require("../../assets/logo_plain.png")}  style={styles.bgimage}
          resizeMode='contain'
        />
      </View>
      <View>
        <Animated.Text entering={FadeInDown.delay(100).duration(200).damping(11)} style={styles.header}>Login</Animated.Text>
      </View>
      <Animated.View entering={FadeInDown.delay(200).duration(200)}  style={styles.signupContainer}>
        <Text style={styles.head2}>New to Goalli?</Text>
        <TouchableOpacity style={styles.link} onPress={() => router.push('Auth/Register')}>
          <Text style={styles.linkText}>Sign up for free</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(300).duration(200)}   style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} value={userName} onChangeText={setUserName} />
        <Feather name='mail' size={24} color="black"/>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(400).duration(200)}  style={styles.inputContainer}>
        <TextInput placeholder="Password" secureTextEntry={showPassword} style={styles.input} value={password} onChangeText={setPassword} />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Feather 
            name={showPassword ? 'eye-off' : 'eye'}
            size={24} 
            color="black" 
          />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity style={styles.link} onPress={() => router.push('Auth/ForgotPass')}>
        <Animated.Text entering={FadeInDown.delay(500).duration(200).damping(11)} style={styles.linkText}>Forgot Your Password?</Animated.Text>
      </TouchableOpacity>
      <Animated.View entering={FadeInDown.delay(600).duration(200)}>
      <TouchableOpacity style={styles.loginButton} onPress={() => LogInRequest()}>
        <Text style={styles.loginButtonText}>Login</Text>
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
    justifyContent:"center",
  },
  bgimageContainer:{
    width: 250,
    height: 130,
    marginBottom: 10,
  },
  bgimage: {
    width: "100%",
    height: "100%",
  },
  head2:{
    fontWeight:"bold",
    fontSize: 16,
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
    backgroundColor: "rgba(255,255,255,0.15)"
}
});
