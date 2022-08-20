import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import StethoscopeIcon from '../../../icons/Stethoscop';

const Greet = () => {

    let currentDT = new Date();
    let hr = currentDT.getHours();
    let greet = (hr <18) ? (hr < 12 ? "Good Morning" : "Good Afternoon") : "Good Evening";
    const name = "Umang Rathod";

    return (
        <View style={Style.container}>
            <View style={Style.leftSection}>
                <Text style={Style.greeting}>{greet},</Text>
                <Text style={Style.name}>{name}</Text>
            </View>
            <StethoscopeIcon />
        </View>
    )
}

export default Greet;

const Style = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginTop:10
    },
    leftSection:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column"
    },
    greeting:{
        color:"#000000",
        fontSize:30,
        fontWeight:"400",
    },
    name:{
        fontSize:30,
        color:"#00B5E2",
        fontWeight:"900"
    },
});