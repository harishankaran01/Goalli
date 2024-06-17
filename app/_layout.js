import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
export default function _layout() {
  return (
   <GestureHandlerRootView style={{flex:1}}>
    <BottomSheetModalProvider>

    <Stack >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='home/index' options={{ headerShown: false }} />
        <Stack.Screen name='home/ProfileDetails' options={{ headerShown: false }} />
        <Stack.Screen name='Auth/ForgotPass' options={{ headerShown: false }} />
        <Stack.Screen name='Auth/Register' options={{ headerShown: false }} />
        <Stack.Screen name='Places/Products' options={{ headerShown: false }} />
        <Stack.Screen name='Payments/PaymentScreen' options={{ headerShown: false }} />
    </Stack>
    </BottomSheetModalProvider>
   </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})