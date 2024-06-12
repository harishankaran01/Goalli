import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../Context/AuthContext';
export default function Hello() {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 30 ? top + 10 : 30;
  const {userToken,LogIn,LogOut,isLoading}=useContext(AuthContext);
  return (
    <View style={{paddingTop}}>
      <Text>Hello</Text>
      <Pressable onPress={()=> LogOut()}>
        <Text>Press me</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})