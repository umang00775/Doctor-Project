import React from 'react'
import { Image, StyleSheet } from 'react-native'

const ProfilePicture = () => (
    <Image source = {require('C:\\Users\\ratho\\Desktop\\App\\my_app\\images\\images\\profile_picture.jpg')} style={Style.imageStyle}/>
);

export default ProfilePicture;

const Style = StyleSheet.create({
    imageStyle:{
        height:40,
        width:40,
        borderRadius:20
    }
})