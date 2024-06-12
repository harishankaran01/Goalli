import React, { useState, useContext } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { hp, wp } from '../../theme/common';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { theme } from '../../theme/color';
import { FontAwesome5 } from '@expo/vector-icons';
import Toast from 'react-native-toast-message'
export default function Register() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(true);
    const [confirmShowPassword, setConfirmShowPassword] = useState(true);
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmPassword]=useState("");
    const signUp=(() => {
     
       if( password.length > 0 && password!= confirmpassword) {
        showToast("Passwords do not match");
        return;
       }
       showToast("Register successfull!");
       setTimeout(() => router.back(), 1500);
        // const { username, email, password, confirmPassword } = user;
        // if (password!==confirmPassword) {
        //     showToast("Passwords do not match");
        //     return;
        // }
        // try {
        //     const response = await fetch("http://192.168.0.102:8000/api/register", {
        //         method: "POST",
        //         headers: {
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             username,
        //             email,
        //             password,
        //         }),
        //     });
        //     const data = await response.json();
        //     console.log(data);
        //     if (data.success) {
        //         showToast(data.message);
        //     } else {
        //         showToast(data.message);
        //     }
        // } catch (error) {
        //     console.log(error);
        //     showToast(error.message);
        // }
    })

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
    return (
        <View style={styles.container}>
            <View>
                <Animated.Text 
                    entering={FadeInDown.delay(100).duration(200).damping(11)} 
                    style={styles.header}
                >
                    Create Your Account
                </Animated.Text>
            </View>
            <Animated.View 
                entering={FadeInDown.delay(300).duration(200)}   
                style={styles.inputContainer}
            >
                <TextInput placeholder="Username" style={styles.input} value={userName} onChangeText={setUserName} />
                <FontAwesome5 name="user" size={24} color="black" />
            </Animated.View>
            <Animated.View 
                entering={FadeInDown.delay(300).duration(200)}   
                style={styles.inputContainer}
            >
                <TextInput placeholder="Email ID" style={styles.input} value={email} onChangeText={setEmail}/>
                <Feather name='mail' size={24} color="black"/>
            </Animated.View>
            <Animated.View 
                entering={FadeInDown.delay(400).duration(200)}  
                style={styles.inputContainer}
            >
                <TextInput 
                    placeholder="Password" 
                    secureTextEntry={showPassword} 
                    style={styles.input} 
                    value={password} onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Feather 
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24} 
                        color="black" 
                    />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View 
                entering={FadeInDown.delay(400).duration(200)}  
                style={styles.inputContainer}
            >
                <TextInput 
                    placeholder="Confirm Password" 
                    secureTextEntry={confirmShowPassword} 
                    style={styles.input} 
                    value={confirmpassword} onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setConfirmShowPassword(!confirmShowPassword)}>
                    <Feather 
                        name={confirmShowPassword ? 'eye-off' : 'eye'}
                        size={24} 
                        color="black" 
                    />
                </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity 
                style={styles.link} 
                onPress={() => router.push('/forgot-password')}
            >
                <Animated.Text 
                    entering={FadeInDown.delay(500).duration(200).damping(11)} 
                    style={styles.policy}
                >
                    By registering, you are agreeing to our terms of use and Privacy Policy
                </Animated.Text>
            </TouchableOpacity>
            <Animated.View 
                entering={FadeInDown.delay(600).duration(200)}
            >
                <TouchableOpacity 
                    style={styles.SignupButton} 
                    onPress={() => signUp()}
                >
                    <Text style={styles.SignupButtonText}>Signup</Text>
                </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity 
                style={styles.link} 
                onPress={() => router.push('/forgot-password')}
            >
                <Animated.Text 
                    entering={FadeInDown.delay(500).duration(200).damping(11)} 
                    style={styles.link} onPress={() => router.back()}
                >
                    Already have an Account? <Text style={styles.linkText}>Login</Text>
                </Animated.Text>
            </TouchableOpacity>
            <Toast config={toastConfig} visibilityTime={2500} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    bgimageContainer: {
        width: 250,
        height: 150,
        marginBottom: 20,
    },
    bgimage: {
        width: "100%",
        height: "100%",
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        marginTop: 10
    },
    policy: {
        color: theme.colors.secondary,
        fontWeight: "500",
        width: wp(80),
        paddingHorizontal: 5
    },
    link: {
        color: theme.colors.secondary,
        fontWeight: "500",
        width: wp(80),
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    linkText: {
        color: theme.colors.secondary,
        textDecorationLine: "underline",
        fontWeight: "500",
    },
    inputContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        height: hp(7),
        paddingLeft: 20,
        width: wp(80),
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
        fontSize: 16,
        paddingLeft: 10,
        padding: 5,
    },
    SignupButton: {
        backgroundColor: theme.colors.third,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
        width: wp(80),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    SignupButtonText: {
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
