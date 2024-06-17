import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../theme/common';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function PaymentScreen() {
    const route=useRoute();
    const {top}=useSafeAreaInsets();
    const {userName}=route.params;
    const paddingTop = top > 30 ? top + 10 : 30;
  return (
    <View style={[{paddingTop}]}>
      <Text style={styles.PaymentText}>Payment Methods</Text>
      <View  style={styles.paymentMethods} >
        <Pressable style={styles.paymentMethod}>
        <MaterialIcons name="payment" size={34} color="black" />
          <Text style={styles.paymentMethodText}>Credit/Debit Cards</Text>            
        </Pressable>
        <Pressable style={styles.paymentMethod}>
        <MaterialIcons name="payment" size={34} color="black" />
        <Text style={styles.paymentMethodText}>Google Pay</Text>    

        </Pressable>
        <Pressable style={styles.paymentMethod}>
        <MaterialIcons name="payment" size={34} color="black" />
        <Text style={styles.paymentMethodText}>Phone Pay</Text>    

        </Pressable>
        <Pressable style={styles.paymentMethod}>
        <MaterialIcons name="payment" size={34} color="black" />
        <Text style={styles.paymentMethodText}>Paytm</Text>    

        </Pressable>
      </View>
  
    </View>
  )
}

const styles = StyleSheet.create({
    PaymentText:{
        fontSize:30,
        fontWeight:'700',
        color:'#000',
        textAlign:'center',
    },
    paymentMethods:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      margin:10,
      padding:20,
      gap:10,
      justifyContent:"center"
    },
    paymentMethod:{
      width:wp(90),
      backgroundColor:"#d7dff2",
      height:hp(10),
      borderRadius:10,
      display:"flex",
      padding:20,
      flexDirection:"row",
      alignItems:"center",
      gap:20,
      paddingHorizontal:40,
    },
    paymentMethodText:{
      fontSize:20,
    },

})