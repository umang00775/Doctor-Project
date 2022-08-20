import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const LargeProfilePicture = () => (
    <View style={Style.container}>
        <Image source = {require('C:\\Users\\ratho\\Desktop\\App\\my_app\\images\\images\\profile_picture.jpg')} style={Style.imageStyle}/>
    </View>
);

export default LargeProfilePicture;

const Style = StyleSheet.create({
    container:{
        marginTop:25,
        width:"100%",
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
    },
    imageStyle:{
        height:125,
        width:125,
        borderRadius:62.5,
        borderWidth:0.75,
        borderColor:"#00B5E2"
    }
})