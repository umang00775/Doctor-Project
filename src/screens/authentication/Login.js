import React from "react";
import {Text, View, StyleSheet} from  "react-native"

const Login = () => {
    return (
        <View style={Style.wholeScreen}>
            <Text>Login Screen</Text>
        </View>
    )
}

export default Login;

const Style = StyleSheet.create({
    wholeScreen:{
        height:"100%",
        width:"100%",
        padding:10,
        backgroundColor:"#111",
    }
})