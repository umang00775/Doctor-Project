import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

/* Importing Images/Logos */
import ProfilePicture from '../../../images/ProfilePicture'; /* Temporary */
import TodaysActivity from '../graphs/TodaysActivity';

/* Importing done work */
import { done } from '../graphs/TodaysActivity';

const ActivityAndFamily = () => {

    const rel1 = "Umang Rathod";
    const rel2 = "Umang Rathod";
    const rels1 = "Brother";
    const rels2 = "Brother";
    
    return(
        <View style={Style.container}>
            <View style={Style.left}>
                <Text style={Style.heading}>Today's activity</Text>
                <View style={Style.activityContainer}>
                    <TodaysActivity />
                    <View style={Style.showStatistics}>
                        <Text style={Style.percentage}>{done}<Text style={Style.percentSymbol}>%</Text></Text>
                        <Text style={Style.completed}>Completed</Text>
                    </View>
                </View>
            </View>
            <View style={Style.right}>
                <View style={Style.topbar}>
                    <Text style={Style.heading}>Family</Text>
                    <Text style={Style.more}>See All</Text>
                </View>
                <View>
                    <View style={Style.relatives}>
                        <View style={Style.relationBox}>
                            <ProfilePicture />
                            <View style={Style.relativesDetails}>
                                <Text style={Style.relativeName}>{rel1}</Text>
                                <Text style={Style.relation}>{rels1}</Text>
                            </View>
                        </View>
                        <View style={Style.relationBox}>
                            <ProfilePicture />
                            <View style={Style.relativesDetails}>
                                <Text style={Style.relativeName}>{rel2}</Text>
                                <Text style={Style.relation}>{rels2}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ActivityAndFamily;

const Style = StyleSheet.create({
    container:{
        marginTop:20,
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    left:{
        display:"flex",
        justifyContent:"space-between",
        paddingVertical:3,
        paddingHorizontal:0
    },
    right:{
        display:"flex",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:3,
        backgroundColor:"rgba(255,255,255,0.50)",
        blurRadius:10,
        borderRadius:5
    },
    activityContainer:{
        height:150,
        width:150,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    topbar:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row"
    },
    heading:{
        fontSize:25,
        color:"#000",
        marginBottom:3
    },
    more:{
        fontSize:15,
        color:"#00B5E2"
    },
    showStatistics:{
        position:"absolute",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    percentage:{
        color:"#000",
        fontSize:30,
        fontWeight:"900"
    },
    percentSymbol:{
        color:"rgba(0,0,0,0.5)",
        fontSize:22
    },
    completed:{
        color:"rgba(0,0,0,0.5)",
        fontSize:18,
        textAlign:"center",
        marginTop:5
    },
    relatives:{
        display:"flex",
        justifyContent:"space-around",
        height:150
    },
    relationBox:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        marginVertical:5
    },
    relativesDetails:{
        marginStart:10
    },
    relativeName:{
        color:"#000",
        fontSize:18
    },
    relation:{
        color:"#555",
        fontSize:15
    }
});