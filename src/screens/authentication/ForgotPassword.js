import React from "react";
import {Text, View, StyleSheet} from  "react-native"

const ForgotPassword = () => {
    return (
        <View style={Style.wholeScreen}>
            <Text>I am Umang Rathod</Text>
        </View>
    )
}

export default ForgotPassword;

const Style = StyleSheet.create({
    wholeScreen:{
        height:"100%",
        width:"100%",
        padding:10,
        backgroundColor:"#000",
    }
})