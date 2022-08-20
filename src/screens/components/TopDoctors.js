import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import DoctorsImage from '../../../images/DoctorsImage';

const TopDoctors = () => {
    return (
        <View style={Style.container}>
            <View style={Style.topbar}>
                <Text style={Style.heading}>Top doctors</Text>
                <Text style={Style.more}>View all</Text>
            </View>
            <ScrollView horizontal={true} style={Style.doctorsContainer}>



                    <View style={Style.doctorBox}>
                        <View>
                            <DoctorsImage />
                            <Text style={Style.rating}>5.0</Text>
                        </View>
                        <View style={Style.doctorsDetail}>
                            {/* doctors details */}
                            <Text style={Style.doctorName}>Dr. S. M.</Text>
                            <Text style={Style.speciality}>Heart sergon</Text>
                        </View>
                    </View>

                    <View style={Style.doctorBox}>
                        <View>
                            <DoctorsImage />
                            <Text style={Style.rating}>5.0</Text>
                        </View>
                        <View style={Style.doctorsDetail}>
                            {/* doctors details */}
                            <Text style={Style.doctorName}>Dr. S. M.</Text>
                            <Text style={Style.speciality}>Heart sergon</Text>
                        </View>
                    </View>

                    <View style={Style.doctorBox}>
                        <View>
                            <DoctorsImage />
                            <Text style={Style.rating}>5.0</Text>
                        </View>
                        <View style={Style.doctorsDetail}>
                            {/* doctors details */}
                            <Text style={Style.doctorName}>Dr. S. M.</Text>
                            <Text style={Style.speciality}>Heart sergon</Text>
                        </View>
                    </View>

                    <View style={Style.doctorBox}>
                        <View>
                            <DoctorsImage />
                            <Text style={Style.rating}>5.0</Text>
                        </View>
                        <View style={Style.doctorsDetail}>
                            {/* doctors details */}
                            <Text style={Style.doctorName}>Dr. S. M.</Text>
                            <Text style={Style.speciality}>Heart sergon</Text>
                        </View>
                    </View>
                    


            </ScrollView>
        </View>
    )
}

export default TopDoctors;

const Style = StyleSheet.create({
    container:{
        marginTop:20,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    topbar:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    heading:{
        fontSize:25,
        color:"#000",
        marginBottom:3,
    },
    more:{
        fontSize:18,
        color:"#444",
    },
    doctorsContainer:{
        display:"flex",
        flexDirection:"row"
    },
    doctorBox:{
        padding:5,
        backgroundColor:"rgba(255,255,255,0.5)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        marginEnd:10
    },
    rating:{
        position:"absolute",
        right:0,
        top:0,
        paddingHorizontal:8,
        paddingVertical:4,
        color:"#FFF",
        borderBottomLeftRadius:5,
        backgroundColor:"#555",
    },
    doctorsDetail:{
        width:"100%"
    },
    doctorName:{
        fontSize:18,
        color:"#000"
    },
    speciality:{
        fontSize:16,
        color:"#333"
    },
});