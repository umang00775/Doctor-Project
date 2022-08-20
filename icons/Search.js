import React from 'react'
import { Image, StyleSheet } from 'react-native'

const SearchIcon = () => (
    <Image source = {require('C:\\Users\\ratho\\Desktop\\App\\my_app\\icons\\images\\search_icon.png')} style={Style.iconStyle}/>
);

export default SearchIcon;

const Style = StyleSheet.create({
    iconStyle:{
        height:30,
        width:30,
        borderRadius:20
    }
})