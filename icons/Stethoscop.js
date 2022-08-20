import React from 'react'
import { Image, StyleSheet } from 'react-native'

const StethoscopeIcon = () => (
    <Image source = {require('C:\\Users\\ratho\\Desktop\\App\\my_app\\icons\\images\\stethoscope_icon.png')} style={Style.iconStyle}/>
);

export default StethoscopeIcon;

const Style = StyleSheet.create({
    iconStyle:{
        height:50,
        width:50,
        opacity:0.75
    }
})