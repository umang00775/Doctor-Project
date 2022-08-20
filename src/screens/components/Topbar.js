import React from 'react'
import { StyleSheet, View } from 'react-native';

/* Importing Images/Logos */
import ProfilePicture from '../../../images/ProfilePicture';  /* DP */
import SearchIcon from '../../../icons/Search';  /* Search Icon */

const Topbar = () => {
    return(
        <View style={Style.topBar}>
            <ProfilePicture />
            <View style={Style.searchIcon}>
                <SearchIcon />
            </View>
        </View>
    );
}

export default Topbar;

const Style = StyleSheet.create({
    topBar:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row"
    },
    searchIcon:{
        height:40,
        width:40,
        padding:5,
        backgroundColor:"rgba(255,255,255,0.75)",
        borderRadius:20
    }
});