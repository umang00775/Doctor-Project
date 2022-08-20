import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native';

/* Importing required components. */
import LargeProfilePicture from '../../images/LargeProfilePicture';



/* Load from database */
const name = "Umang Rathod";
const age = 19;
const gender = "Male";
const height = 185;
const weight = 68;
const bloodGroup = "AB+";
const bmiIndex = Math.ceil(weight*100*100/(height*height));
const healthStatusFromBMI = bmiIndex >= 25 ? "Overweight" : (bmiIndex >= 18 ? "Healthy" : "Underweight");


const Profile = () => {
    return (
        <ScrollView style={Style.wholeScreen}>

            {/* Edit */}
            {/* <EditIcon /> */}


            {/* Profile Picture */}
            <LargeProfilePicture />


            {/* Name */}
            <View style={Style.container}>
                <View style={Style.box}>
                    <Text style={Style.label}>Name</Text>
                    <Text style={Style.data}>{name}</Text>
                </View>

                <View style={Style.box}>
                    <Text style={Style.label}>Age</Text>
                    <Text style={Style.data}>{age} years</Text>
                </View>

                <View style={Style.box}>
                    <Text style={Style.label}>Gender</Text>
                    <Text style={Style.data}>{gender}</Text>
                </View>

                <View style={Style.box}>
                    <Text style={Style.label}>Height</Text>
                    <Text style={Style.data}>{height} cm</Text>
                </View>

                <View style={Style.box}>
                    <Text style={Style.label}>Weight</Text>
                    <Text style={Style.data}>{weight} kg</Text>
                </View>

                <View style={Style.box}>
                    <Text style={Style.label}>Blood group</Text>
                    <Text style={Style.data}>{bloodGroup}</Text>
                </View>

                <View style={Style.box}>
                    <Text style={Style.label}>BMI index</Text>
                    <Text style={Style.data}>{bmiIndex} ({healthStatusFromBMI})</Text>
                </View>
            </View>

            <View style={Style.button}>
                <Text style={Style.buttonText}>Edit Profile</Text>
            </View>


        </ScrollView>
    )
}

export default Profile;

const Style = StyleSheet.create({
    wholeScreen:{
        height:"100%",
        backgroundColor:"#FFFFFF",
        padding:10
    },
    
    container:{
        marginTop:15
    },
    box:{
        marginVertical:5,
        padding:5,
        width:"100%"
    },
    label:{
        color:"#555555",
        fontSize:18,
        marginBottom:2
    },
    data:{
        color:"#000000",
        fontSize:25
    },
    button:{
        marginTop:10,
        paddingVertical:10,
        backgroundColor:"#FFF",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        borderRadius:5,
        borderWidth:0.5,
        borderColor:"#000",
        marginBottom:75
    },
    buttonText:{
        color:"#000",
        fontSize:20,
        letterSpacing:1
    }
})