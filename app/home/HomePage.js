import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../Context/AuthContext';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../../theme/color';
import SearchBar from './SearchBar';
import Categories from './Categories';
import Turf from './Turf';

export default function HomePage() {
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 30 ? top + 10 : 30;
    const { LogIn, LogOut, isLoading, userName } = useContext(AuthContext);
    const [activeCategory, setActiveCategory] = useState("");
   
    const handleActiveCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <View style={[{ paddingTop }, styles.container]}>
            <View style={styles.head}>
                <View>
                    <View style={styles.headTitle}>
                        <Text style={styles.headTitleText}>Hi</Text>
                        <Text style={styles.headTitleName}>{userName}</Text>
                    </View>
                    <View>
                        <Text style={styles.headDescription}>Explore the world</Text>
                    </View>
                </View>
                <View>
                    <Entypo name="menu" size={40} color="black" onPress={() => LogOut()} />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

           
            <SearchBar />
            <Categories handleActiveCategoryChange={handleActiveCategoryChange} activeCategory={activeCategory} />
           <View style={styles.turfPlace}>
            <Text style={styles.PlaceText}>Find Available slots for you</Text>
            <Turf/>
           </View>
           </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        padding: 10,
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    headTitle: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    headTitleText: {
        fontSize: 30,
        fontWeight: '700',
    },
    headTitleName: {
        fontSize: 30,
        fontWeight: '300',
    },
    headDescription: {
        fontSize: 24,
        fontWeight: '300',
        color: theme.colors.neutral(0.5),
    },
    turfPlace:{
        padding: 10,
    },
    PlaceText:{
        fontSize:20,
        fontWeight:theme.fontWeights.semibold,
        color:theme.colors.neutral(0.8),
        letterSpacing:1,
        marginVertical:20,
        marginHorizontal:5
    }
});
