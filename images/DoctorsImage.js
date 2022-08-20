import React from 'react'
import { Image, StyleSheet } from 'react-native'

const DoctorsImage = () => (
    <Image source = {{uri:"https://www.kindpng.com/picc/m/111-1115352_doctor-png-transparent-png.png"}} style={Style.imageStyle}/>
);

export default DoctorsImage;

const Style = StyleSheet.create({
    imageStyle:{
        height:150,
        width:125,
        borderRadius:5,
        borderWidth:0.125,
        borderColor:"#000",
    }
})