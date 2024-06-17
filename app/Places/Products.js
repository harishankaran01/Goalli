import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import APIData from '../home/APIData';
import { hp, wp } from '../../theme/common';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../../theme/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
export default function Products() {
    let route=useRoute();
    let {id,userName}=route.params;
    const Navigation=useNavigation();
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 30 ? top + 10 : 30;
    const Turf=APIData.map((turfPlaces)=>{
        if(turfPlaces.id === id){
            return(
                <View key={turfPlaces.id}>
                    
                    <Image source={require("../../assets/Icons/Turf1.png")} resizeMode='cover' style={styles.image}/>
                    <View style={styles.imageDescription}>
                        <View style={styles.imageDescriptionHead}>
                            <View style={styles.imagePlace}>
                                <Text style={styles.imageDescriptionHeadText}>{turfPlaces.name}</Text>
                                <View style={styles.location} >
                                    <Ionicons name="location-outline" size={30} color="black" />
                                    <Text style={styles.locationText}>Kochadai, Madurai</Text>
                                </View>
                            </View>
                            <View style={styles.rating}>

                            <AntDesign name="staro" size={28} color="black" />
                            <Text style={styles.ratingText}>{turfPlaces.rating}</Text>
                            </View>
                        </View>
                        <View>
                        <Text style={styles.DescriptionText}>
                        Turf refers to the surface layer of land covered with grass and its roots, often used for lawns, sports fields, and golf courses. It provides a durable and visually appealing ground cover, which can withstand significant foot traffic and various weather conditions. Turf can be natural, consisting of real grass, or artificial, made from synthetic fibers designed to mimic the appearance of natural grass. Maintaining natural turf requires regular mowing, watering, and fertilizing, while artificial turf needs occasional cleaning and brushing. The choice between natural and artificial turf depends on factors like usage, maintenance preferences, and environmental considerations.
                        </Text>
                            
                    </View>
                    <View style={styles.buttons}>
                        <Pressable style={[styles.button]} onPress={()=>Navigation.navigate("Payments/PaymentScreen",{userName})}>
                        <MaterialCommunityIcons name="bookmark-check-outline" size={34} color="black" />
                        <Text style={styles.buttonText}>Book a Slot</Text>
                        </Pressable>
                        <Pressable style={[styles.button,styles.button2]}>
                        <FontAwesome6 name="location-arrow" size={34} color="white" />
                        <Text style={[styles.buttonText,styles.buttonText1]}>Direction</Text>
                        </Pressable>
                    </View>
                    </View>
                    
                   
                   
                </View>
            )
        }
    })
  return (
      
    <View style={[{paddingTop},styles.TurfPlacesContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
   {Turf}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    TurfPlacesContainer:{
        flex:1,
        paddingBottom:0,
        margin:0

    },
    imageDescriptionHeadText:{
        fontSize:25,
        fontWeight:'bold',
        color:theme.colors.third,
        marginHorizontal:8
    },
    imagePlace:{
        display:"flex",
        flexDirection:"column",
        gap:10
    },
    location:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    locationText:{
        fontSize:14,
        fontWeight:'400',
        color:'#000'
    },
    ratingText:{
        fontSize:14,
        fontWeight:'400',
        color:'#000'
    },
    image:{ 
        width:wp(100),
        height:400,
        margin:0,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,

     
    },
    rating:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        padding:10

    },
    imageDescription:{
        width:wp(100)
    },
    imageDescriptionHead:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:10,
    },
    DescriptionText:{
        fontSize:16,
        fontWeight:'500',
        color:'#000',
        marginHorizontal:10,
        marginVertical:10,
        lineHeight:22,
        textAlign:'justify'
    },
    buttons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        paddingHorizontal:15
    },
    button:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        // marginBottom:10,
        gap:10,
        backgroundColor:theme.colors.primary,
        borderRadius:theme.radius.md,
        borderCurve:"continuous"
    },
    buttonText:{
        fontSize:18,
        fontWeight:'600',
    },
    button2:{
        backgroundColor:"#C80036"
    },
    buttonText1:{
        color:"white"
    }
})