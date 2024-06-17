import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { theme } from '../../theme/color';
import { useRouter, useSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { hp, wp } from '../../theme/common';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function ProfileDetails() {
    const route=useRoute();
    const {userName,LogOut}=route.params;
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 30 ? top + 10 : 30;
  return (
    <View style={[{paddingTop},styles.profileContainer]}>
      <Text style={styles.profileHeadText}>Profile</Text>

      <View style={styles.profileNameContainer}>
        <View>
            <Text style={styles.profileName}>Hello, {userName}</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.ProfileDetailsContainer}>
      <Pressable  style={styles.ProfileDetails}>
      <FontAwesome6 name="user-circle" size={34} color="black" />
        <Text style={styles.ProfileDetailsText}>Personal Information</Text>
        </Pressable>
        <Pressable style={styles.ProfileDetails}>
        <MaterialIcons name="payment" size={34} color="black" />
        <Text style={styles.ProfileDetailsText}>Payments and Payouts</Text>
        </Pressable>
        <Pressable  style={styles.ProfileDetails}>
        <Ionicons name="bookmarks-outline" size={34} color="black" />
        <Text style={styles.ProfileDetailsText}>Saved Places</Text>
        </Pressable>
        <Pressable  style={styles.ProfileDetails}>
        <Ionicons name="notifications-outline" size={34} color="black" />
        <Text style={styles.ProfileDetailsText}>Notifications</Text>
        </Pressable>
        <Pressable style={styles.ProfileDetails}>
        <Feather name="help-circle" size={34} color="black" />
        <Text style={styles.ProfileDetailsText}>Help & Support</Text>
        </Pressable>
        <Pressable onPress={()=>LogOut()}  style={styles.ProfileDetails}>
        <AntDesign name="logout" size={34} color="black" />
        <Text style={styles.ProfileDetailsText}> Log out</Text>
        </Pressable>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    profileContainer:{
        flex:1,
        padding:10,
        backgroundColor:theme.colors.primary
    },
    profileHeadText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        margin:20
    },
    profileNameContainer:{
        display:"flex",
        width:wp(95),
        height:hp(11),
        backgroundColor:"#FF6969",
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        gap:80,
        borderRadius:20,
        shadowColor: theme.colors.neutral(0.3),
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    profileName:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000'
    },
    ProfileDetailsContainer:{
        width:wp(95),
        height:hp(70),
        backgroundColor:"#e6d764",
        padding:20,
        flexDirection:"column",
        marginVertical:20,
        borderRadius:30,
        shadowColor: theme.colors.neutral(0.3),
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ProfileDetails:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        padding:10,
        marginVertical:12,
        // backgroundColor:"#FFFFFF",
    },
    ProfileDetailsText:{
        fontSize:20,
        fontWeight:'400',
        color:'#000'
    }
})