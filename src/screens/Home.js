import React from "react";
import {Text, View, StyleSheet, ScrollView} from  "react-native";

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

/* Importing Components */
import Topbar from "./components/Topbar";
import Greet from './components/Greet'
import ActivityAndFamily from "./components/ActivityAndFamily";
import TopArticles from "./components/TopArticles";
import TopDoctors from "./components/TopDoctors";



/* Importing other screens */
import Profile from "./Profile";


const Home = () => {
    return (
        <ScrollView style={Style.wholeScreen}>
            {/* Top --> DP & search option */}
            <Topbar />

            {/* Greeting part */}
            <Greet />

            {/* Middle part --> Todays'activity & showing members */}
            <ActivityAndFamily />

            {/* Top Articles */}
            {/* <TopArticles /> */}

            {/* Top doctors */}
            <TopDoctors />

        </ScrollView>
    )
}

const HomeSWEETY = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default Home;

const Style = StyleSheet.create({
    wholeScreen:{
        height:"100%",
        width:"100%",
        padding:10,
        backgroundColor:"#EEE",
    },
})










