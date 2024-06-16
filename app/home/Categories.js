import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { theme } from '../../theme/color';
import { wp,hp } from '../../theme/common';
import Animated, { FadeInRight } from 'react-native-reanimated';
import data from '../../theme/data';
export default function Categories({activeCategory,handleActiveCategoryChange}) {
    let Category=data.map((category)=>{
        isActive= activeCategory==category;
        let color = isActive ? "black" :"black";
        let backgroundColor = isActive ? "blue": "white";
        return(
            <Pressable onPress={()=>handleActiveCategoryChange(activeCategory==category ? null : category)}  style={[styles.category,{backgroundColor}]} key={category} >
                <Text style={[styles.categoryTitle,{color}]}>{category}</Text>
            </Pressable>
        )
    })
  return (

    <View >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.MapContainer}>
        {Category}
        </ScrollView>
    </View>
   

  );
}

const styles = StyleSheet.create({
  MapContainer: {
    paddingHorizontal:wp(4),
    gap:8,
  },
  category: {
    paddingHorizontal:15,
    padding: 12,
    borderWidth: 1,
    borderColor:"black",
    borderRadius: theme.radius.lg,
    backgroundColor:"white",
    borderCurve:"continuous"
  },
  title: {
    color: theme.colors.neutral(0.7),
    fontSize: hp(1.8),
    fontWeight: theme.fontWeights.medium,
  },
});
