import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';
import { hp, wp } from '../../theme/common';
export default function SearchBar() {
  return (
    <View style={styles.container}>

    <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder='Search for a Turf Place'/>
        <FontAwesome name="search" size={24} color="red" />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        marginVertical:20
    },
    searchBar: {
        height:hp(7),
        width: wp(92),
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: '#000',
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
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#424242',
    },
    icon: {
        fontSize: 24,
        color: '#424242',
    },
})