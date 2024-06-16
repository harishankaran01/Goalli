import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { hp, wp } from '../../theme/common';

export default function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef(null);

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    placeholder='Search for a Turf Place'
                    value={searchText}
                    onChangeText={setSearchText}
                    ref={inputRef}
                />
                <FontAwesome
                    name="search"
                    size={24}
                    onPress={() => { inputRef.current.focus() }}
                    color="red"
                    style={styles.icon}
                />
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
        paddingHorizontal:10
    },
})