import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import APIData from './APIData'
import { wp,hp } from '../../theme/common'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function Turf() {
    let turfPlace=APIData.map((place)=>{
        return(
          <View key={place.id} style={styles.imageContainer}>
          <Image
            source={require("../../assets/Icons/TurfWar.png")}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{place.name}</Text>
            <View style={styles.subTextContainer}>
            <Ionicons name="location-outline" size={24} color="white" />
            <View  style={styles.subTextContainer1}>
            <AntDesign name="staro" size={24} color="white" />
            <Text style={styles.text}>{place.rating}</Text>
            </View>
           
            </View>
          
          </View>
        </View>
    
        )
    })
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.TurfPlaces}>
        {turfPlace}
      </ScrollView>
 
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: wp(65),
    height: hp(40), 
    padding:10
  },
  image: {
    width: wp(60),
    height: '100%',
    borderRadius:wp(5)
  },
  textContainer: {
    position: 'absolute',
    bottom:10,
    left: 14,
    right: 0,
    padding: 10,
    width: wp(58),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: wp(5),
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  subTextContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop: 10,
  },
  subTextContainer1:{
    flexDirection:'row',
    alignItems:'center',
  
  }
 
})