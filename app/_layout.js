import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
export default function _layout() {
  return (
   <GestureHandlerRootView>
    <Stack >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='home/index' options={{ headerShown: false }} />
        <Stack.Screen name='Auth/ForgotPass' options={{ headerShown: false }} />
        <Stack.Screen name='Auth/Register' options={{ headerShown: false }} />
    </Stack>
   </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})