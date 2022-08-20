import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const TopArticles = () => {
    return (
        <View style={Style.container}>
            <View style={Style.topbar}>
                <Text style={Style.heading}>Top doctors</Text>
                <Text style={Style.more}>View all</Text>
            </View>
            <ScrollView>
                
            </ScrollView>
        </View>
    )
}

export default TopArticles;

const Style = StyleSheet.create({
    container:{
        display:"flex"
    },
});